import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import {
  ButtonCategory,
  FormContainer,
  TransactionTypeContainer,
} from './newTransactionModalStyle';
import { useTransactions } from '../../hooks/useTransactions';

import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/Entradas.svg';
import outcomeIcon from '../../assets/Saídas.svg';
import { useContextModal } from '../../hooks/useContextModal';

// type NewTransactionModalProps = {
//   isOpen: boolean;
//   onRequestClose: () => void;
// };

export function NewTransactionModal() {
  const { createTransaction } = useTransactions();
  const {
    newTransactionModal: isOpen,
    handleCloseNewTransactionModal: onRequestClose,
  } = useContextModal();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [typeTransaction, setTypeTransaction] = useState('entrada');
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type: typeTransaction,
      category,
    });

    setTitle('');
    setAmount(0);
    setTypeTransaction('none');
    setCategory('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => {
          onRequestClose();
          setTypeTransaction('none');
          setTitle('');
          setAmount(0);
          setCategory('');
        }}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Ícone para fechar" />
      </button>
      <FormContainer onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={({ target }) => setAmount(Number(target.value))}
        />

        <TransactionTypeContainer>
          <ButtonCategory
            isActive={typeTransaction === 'deposit' ? 'green' : 'false'}
            type="button"
            onClick={() => setTypeTransaction('deposit')}
          >
            <img src={incomeIcon} alt="Ícone de entrada" />
            <span>Entrada</span>
          </ButtonCategory>
          <ButtonCategory
            isActive={typeTransaction === 'withdraw' ? 'red' : 'false'}
            type="button"
            onClick={() => setTypeTransaction('withdraw')}
          >
            <img src={outcomeIcon} alt="Ícone de saída" />
            <span>Saída</span>
          </ButtonCategory>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  );
}
