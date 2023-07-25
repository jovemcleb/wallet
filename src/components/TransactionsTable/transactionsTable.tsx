import { useTransactions } from '../../hooks/useTransactions';
import { useContextModal } from '../../hooks/useContextModal';

import { TransactionsTableContainer } from './transactionsTableStyle';

import deleteIcon from '../../assets/excluir.svg';
import editIcon from '../../assets/editar.svg';

export function TransactionsTable() {
  const { transactions, deleteTransaction, findTransactionToEdit } =
    useTransactions();
  const { handleOpenEditTransactionModal: onOpenEditTransaction } =
    useContextModal();

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
                  <td className="delete">
                    <img
                      src={deleteIcon}
                      onClick={() => deleteTransaction(id)}
                      alt="Ícone de Lixeira"
                    />
                  </td>
                  <td className="edit">
                    <img
                      src={editIcon}
                      alt="Ícone de Edição"
                      onClick={() => {
                        onOpenEditTransaction();
                        findTransactionToEdit(id);
                      }}
                    />
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
