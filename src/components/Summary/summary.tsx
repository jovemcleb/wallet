import { useTransactions } from '../../hooks/useTransactions';
import { Card, SummaryContainer } from './summaryStyle';
import entradas from '../../assets/Entradas.svg';
import saidas from '../../assets/Saídas.svg';
import totalIcon from '../../assets/Total.svg';

export function Summary() {
  const { transactions } = useTransactions();

  // const totalDeposit = transactions.reduce((acc, { type, amount }) => {
  //   if (type === 'deposit') {
  //     return acc + amount;
  //   }
  //   return acc;
  // }, 0);

  const { deposits, withdraws, total } = transactions.reduce(
    (acc, { type, amount }) => {
      if (type === 'deposit') {
        acc.deposits += amount;
        acc.total += amount;
      } else {
        acc.withdraws += amount;
        acc.total -= amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <Card>
        <div>
          <span>Entradas</span>
          <img src={entradas} alt="Seta verde apontada para cima" />
        </div>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(deposits)}
        </strong>
      </Card>
      <Card>
        <div>
          <span>Saídas</span>
          <img src={saidas} alt="Seta vermelha apontada para baixo" />
        </div>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(withdraws)}
        </strong>
      </Card>
      <Card background={'green'}>
        <div>
          <span>Total</span>
          <img src={totalIcon} alt="Cifrão" />
        </div>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </strong>
      </Card>
    </SummaryContainer>
  );
}
