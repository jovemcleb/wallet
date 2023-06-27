import { AppContainer } from './styles/app';
import { Header } from './components/Header/header';
import logo from './assets/wallet-logo.svg';

function App() {
  return (
    <AppContainer>
      <Header>
        <div>
          <img
            src={logo}
            alt="Logo da carteira: círculo verde com cifrão no meio"
          />
          <h1>Wallet</h1>
        </div>

        <button>Nova transação</button>
      </Header>
    </AppContainer>
  );
}

export default App;
