import { HeaderContainer } from './headerStyle';
import logo from '../../assets/wallet-logo.svg';
import { useContextModal } from '../../hooks/useContextModal';

// type HeaderProps = {
//   onOpenNewTransactionModal: () => void;
// };

export function Header() {
  const { handleOpenNewTransactionModal: onOpenNewTransactionModal } =
    useContextModal();

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

        <button type="button" onClick={() => onOpenNewTransactionModal()}>
          Nova transação
        </button>
      </div>
    </HeaderContainer>
  );
}
