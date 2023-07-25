import Modal from 'react-modal';

import { AppContainer } from './styles/app';

import { Header } from './components/Header/header';
import { Dashboard } from './components/DashBoard/dashboard';
import { NewTransactionModal } from './components/NewTransactionModal/newTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { ModalProvider } from './hooks/useContextModal';
import { EditTransactionModal } from './components/EditTransactionModal/editTransactionModal';

Modal.setAppElement('#root');

function App() {
  return (
    <TransactionsProvider>
      <AppContainer>
        <ModalProvider>
          <NewTransactionModal />
          <EditTransactionModal />
          <Header />
          <Dashboard />
        </ModalProvider>
      </AppContainer>
    </TransactionsProvider>
  );
}

export default App;
