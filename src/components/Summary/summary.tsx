import { useContext } from 'react';
import { TransactionsContext } from '../../transactionsContext';
import { Card, SummaryContainer } from './summaryStyle';
import entradas from '../../assets/Entradas.svg';
import saidas from '../../assets/Saídas.svg';
import total from '../../assets/Total.svg';

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <SummaryContainer>
      <Card>
        <div>
          <span>Entradas</span>
          <img src={entradas} alt="Seta verde apontada para cima" />
        </div>
        <strong>R$ 123,00</strong>
      </Card>
      <Card>
        <div>
          <span>Saídas</span>
          <img src={saidas} alt="Seta vermelha apontada para baixo" />
        </div>
        <strong>R$ 123,00</strong>
      </Card>
      <Card background={'green'}>
        <div>
          <span>Total</span>
          <img src={total} alt="Cifrão" />
        </div>
        <strong>R$ 123,00</strong>
      </Card>
    </SummaryContainer>
  );
}
