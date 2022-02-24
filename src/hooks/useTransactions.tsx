import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type NewTransaction = Omit<Transaction, "id" | "createdAt">;

type TransactionContextProps = {
  transactions: Array<Transaction>;
  createTransaction: (transaction: NewTransaction) => Promise<boolean>;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

const TransactionsContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: NewTransaction) {
    return api
      .post("transactions", { ...transaction, createdAt: String(new Date()) })
      .then((response) => {
        setTransactions([...transactions, response.data.transactions]);
        return true;
      })
      .catch((e) => {
        console.log(e);
        return false;
      });
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransaction() {
  return useContext(TransactionsContext);
}
