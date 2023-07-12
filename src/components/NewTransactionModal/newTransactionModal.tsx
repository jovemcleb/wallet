import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import {
  ButtonCategory,
  FormContainer,
  TransactionTypeContainer,
} from './newTransactionModalStyle';

import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/Entradas.svg';
import outcomeIcon from '../../assets/Saídas.svg';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [typeTransaction, setTypeTransaction] = useState('entrada');
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    const dataTransaction = {
      title,
      value,
      typeTransaction,
      category,
    };

    api.post('/transactions', dataTransaction);

    onRequestClose();
    setTitle('');
    setValue(0);
    setTypeTransaction('none');
    setCategory('');
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
          setValue(0);
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
          value={value}
          onChange={({ target }) => setValue(Number(target.value))}
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
