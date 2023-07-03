import Modal from 'react-modal';
import { FormContainer } from './newTransactionModalStyle';

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
      <h2>Cadastrar transação</h2>

      <FormContainer>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit"></button>
      </FormContainer>
    </Modal>
  );
}
