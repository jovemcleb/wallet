import { useState } from 'react';
import Modal from 'react-modal';

import { AppContainer } from './styles/app';

import { Header } from './components/Header/header';
import { Dashboard } from './components/DashBoard/dashboard';
import { NewTransactionModal } from './components/NewTransactionModal/newTransactionModal';
import { TransactionsProvider } from './transactionsContext';

Modal.setAppElement('#root');

function App() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);

  const handleCloseNewTransactionModal = () => setNewTransactionModal(false);
  const handleOpenNewTransactionModal = () => setNewTransactionModal(true);

  return (
    <TransactionsProvider>
      <AppContainer>
        <NewTransactionModal
          isOpen={newTransactionModal}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
      </AppContainer>
    </TransactionsProvider>
  );
}

export default App;
