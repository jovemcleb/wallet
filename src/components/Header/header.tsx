import { HeaderContainer } from './headerStyle';
import logo from '../../assets/wallet-logo.svg';
export function Header() {
  return (
    <HeaderContainer>
      <div className="content">
        <div className="logo">
          <img
            src={logo}
            alt="Logo da carteira: círculo verde com cifrão no meio"
          />
          <h1>Wallet</h1>
        </div>

        <button>Nova transação</button>
      </div>
    </HeaderContainer>
  );
}
