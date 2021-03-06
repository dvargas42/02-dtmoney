import { FormEvent, useState } from "react";
import Modal from "react-modal";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

import {
  Container,
  ErrorMessageBox,
  Input,
  RadioBox,
  TransactionTypeContainer,
} from "./styles";

import { useTransaction } from "../../hooks/useTransactions";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

type FieldsInError = {
  title?: boolean;
  amount?: boolean;
  category?: boolean;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const [fieldsInError, setFieldsInError] = useState<FieldsInError>({});
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [hasError, setHasError] = useState(false);

  const { createTransaction } = useTransaction();

  function handleRequestClose() {
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    handleClearErrors();
    onRequestClose();
  }

  function handleClearErrors() {
    setHasError(false);
    setFieldsInError({});
    setErrorMessages([]);
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (!validateFields()) return;

    const data = {
      title,
      amount,
      type,
      category,
    };

    const response = await createTransaction(data);

    if (!response) {
      setHasError(true);

      setErrorMessages([
        ...errorMessages,
        "Erro no sistema. Tente mais tarde.",
      ]);
    } else {
      handleRequestClose();
    }
  }

  function validateFields() {
    let fields: FieldsInError = {};
    let messages: string[] = [];
    let isValid = true;

    if (!title) {
      isValid = false;
      fields.title = true;
      messages.push("Preencha o campo de t??tulo.");
    }
    if (!amount) {
      isValid = false;
      fields.amount = true;
      messages.push("Preencha o campo de valor.");
    }
    if (!category) {
      isValid = false;
      fields.category = true;
      messages.push("Preencha o campo de categoria.");
    }

    setHasError(!isValid);
    setFieldsInError(fields);
    setErrorMessages(messages);

    return isValid;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay "
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={handleRequestClose}
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transa????o</h2>
        <Input
          type="text"
          placeholder="T??tulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          hasError={!!fieldsInError.title}
          onFocus={handleClearErrors}
        />
        <Input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.target.value))}
          hasError={!!fieldsInError.amount}
          onFocus={handleClearErrors}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="deposit"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="withdraw"
          >
            <img src={outcomeImg} alt="Sa??das" />
            <span>Sa??das</span>
          </RadioBox>
        </TransactionTypeContainer>

        <Input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          hasError={!!fieldsInError.category}
          onFocus={handleClearErrors}
        />
        <button type="submit">Cadastrar</button>
        {hasError && (
          <ErrorMessageBox>
            {errorMessages.map((message) => {
              return <p key={message}>{message}</p>;
            })}
          </ErrorMessageBox>
        )}
      </Container>
    </Modal>
  );
}
