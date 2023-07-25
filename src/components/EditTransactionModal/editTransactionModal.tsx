import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useContextModal } from '../../hooks/useContextModal';

import {
  ButtonCategory,
  FormContainer,
  TransactionTypeContainer,
} from '../NewTransactionModal/newTransactionModalStyle';

import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/Entradas.svg';
import outcomeIcon from '../../assets/Saídas.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function EditTransactionModal() {
  const {
    editTransactionModal: isOpen,
    handleCloseEditTransactionModal: onRequestClose,
  } = useContextModal();
  const { currentTransaction, updateTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [typeTransaction, setTypeTransaction] = useState('entrada');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (currentTransaction) {
      setTitle(currentTransaction.title);
      setAmount(currentTransaction.amount);
      setTypeTransaction(currentTransaction.type);
      setCategory(currentTransaction.category);
    }

    return () => {
      setTitle('');
      setAmount(0);
      setTypeTransaction('entrada');
      setCategory('');
    };
  }, [currentTransaction]);

  const handleEditTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await updateTransaction({
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
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={() => onRequestClose()}
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={() => onRequestClose()}
      >
        <img src={closeIcon} alt="Ícone para fechar" />
      </button>
      <FormContainer onSubmit={handleEditTransaction}>
        <h2>Editar transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title || ''}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount || 0}
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
          value={category || ''}
          onChange={({ target }) => setCategory(target.value)}
        />
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  );
}
