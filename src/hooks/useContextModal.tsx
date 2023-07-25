import { ReactNode, createContext, useContext, useState } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};
type ModalContextData = {
  newTransactionModal: boolean;
  handleCloseNewTransactionModal: () => void;
  handleOpenNewTransactionModal: () => void;
};

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export function ModalProvider({ children }: ModalProviderProps) {
  const [newTransactionModal, setNewTransactionModal] = useState(false);

  const handleCloseNewTransactionModal = () => setNewTransactionModal(false);
  const handleOpenNewTransactionModal = () => setNewTransactionModal(true);

  return (
    <ModalContext.Provider
      value={{
        newTransactionModal,
        handleCloseNewTransactionModal,
        handleOpenNewTransactionModal,
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
