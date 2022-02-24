import { useTransaction } from "../../hooks/useTransactions";
import { currencyConverter, dateConverter } from "../../utils/converter";

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransaction();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {currencyConverter({
                  money: transaction.amount,
                  type: transaction.type,
                })}
              </td>
              <td>{transaction.category}</td>
              <td>{dateConverter(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
