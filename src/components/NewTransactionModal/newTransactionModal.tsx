import Modal from 'react-modal';
import {
  FormContainer,
  TransactionTypeContainer,
} from './newTransactionModalStyle';

import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/Entradas.svg';
import outcomeIcon from '../../assets/Saídas.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => onRequestClose()}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Ícone para fechar" />
      </button>
      <FormContainer>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeIcon} alt="Ícone de entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeIcon} alt="Ícone de saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  );
}
