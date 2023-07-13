import { useContext } from 'react';
import { TransactionsContext } from '../../transactionsContext';
import { TransactionsTableContainer } from './transactionsTableStyle';

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);
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
            {transactions.map(
              ({ id, title, amount, type, category, createdAt }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td className={type}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(amount)}
                  </td>
                  <td>{category}</td>
                  <td>
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(createdAt)
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </TransactionsTableContainer>
    </>
  );
}
