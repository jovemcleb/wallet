import { useEffect } from 'react';
import { TransactionsTableContainer } from './transactionsTableStyle';
import { api } from '../../services/api';

export function TransactionsTable() {
  // const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions').then((response) => console.log(response.data));
  }, []);
  return (
    <>
      <TransactionsTableContainer>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salário</td>
              <td className="deposit">1300.00</td>
              <td>Entrada</td>
              <td>20/06/2023</td>
            </tr>
            <tr>
              <td>Lanche</td>
              <td className="withdraw">- 20.00</td>
              <td>Alimentação</td>
              <td>27/06/2023</td>
            </tr>
          </tbody>
        </table>
      </TransactionsTableContainer>
    </>
  );
}
