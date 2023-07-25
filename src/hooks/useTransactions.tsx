import {
  ReactNode,
  createContext,
  useContext,
  // useEffect,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';
// import { api } from '../services/api';

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

// type TransactionInputUpdate = {
//   id: string;
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// };

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionsContextData = {
  transactions: Transaction[];
  currentTransaction: Transaction | undefined;
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
  findTransactionToEdit: (id: string) => Promise<void>;
  updateTransaction: (transaction: TransactionInput) => Promise<void>;
};

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: uuid(),
      title: 'Desenvolvimento de site',
      type: 'deposit',
      category: 'Development',
      amount: 6000,
      createdAt: String(new Date('2023-07-13 09:00:00')),
    },
    {
      id: uuid(),
      title: 'Aluguel',
      type: 'withdraw',
      category: 'Casa',
      amount: 500,
      createdAt: String(new Date('2023-07-16 09:00:00')),
    },
  ]);
  const [currentTransaction, setCurrentTransaction] = useState<Transaction>(
    {} as Transaction
  );

  // useEffect(() => {
  //   api
  //     .get('/transactions')
  //     .then((response) => setTransactions(response.data.transactions));
  // }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    // const response = await api.post('/transactions', {
    //   ...transactionInput,
    //   createdAt: new Date(),
    // });
    // const { transaction } = response.data;

    setTransactions([
      ...transactions,
      {
        id: uuid(),
        ...transactionInput,
        createdAt: String(new Date()),
      },
    ]);
  };

  const deleteTransaction = async (idInput: string) => {
    const newTransactions = transactions.filter(({ id }) => id !== idInput);
    setTransactions(newTransactions);
  };

  const findTransactionToEdit = async (idInput: string) => {
    const transaction = transactions.find(({ id }) => id === idInput);
    setCurrentTransaction(transaction!);
  };

  const updateTransaction = async (transaction: TransactionInput) => {
    const updatedTransactions = [...transactions];
    const transactionIndex = updatedTransactions.findIndex(
      ({ id }) => id === currentTransaction.id
    );

    updatedTransactions[transactionIndex] = {
      ...currentTransaction,
      title: transaction.title,
      amount: transaction.amount,
      category: transaction.category,
      type: transaction.type,
    };

    setTransactions(updatedTransactions);
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        deleteTransaction,
        findTransactionToEdit,
        currentTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
