import { ReactNode, createContext, useContext, useState } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};
type ModalContextData = {
  newTransactionModal: boolean;
  editTransactionModal: boolean;
  handleCloseNewTransactionModal: () => void;
  handleOpenNewTransactionModal: () => void;
  handleOpenEditTransactionModal: () => void;
  handleCloseEditTransactionModal: () => void;
};

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export function ModalProvider({ children }: ModalProviderProps) {
  const [newTransactionModal, setNewTransactionModal] = useState(false);
  const [editTransactionModal, setEditTransactionModal] = useState(false);

  const handleCloseNewTransactionModal = () => setNewTransactionModal(false);
  const handleOpenNewTransactionModal = () => setNewTransactionModal(true);

  const handleOpenEditTransactionModal = () => setEditTransactionModal(true);
  const handleCloseEditTransactionModal = () => setEditTransactionModal(false);

  return (
    <ModalContext.Provider
      value={{
        newTransactionModal,
        handleCloseNewTransactionModal,
        handleOpenNewTransactionModal,
        editTransactionModal,
        handleOpenEditTransactionModal,
        handleCloseEditTransactionModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useContextModal() {
  const context = useContext(ModalContext);
  return context;
}
