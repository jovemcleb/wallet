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

// type TransactionInput = {
//   title: string;
//   value: number;
//   typeTransaction: string;
//   category: string;
// };

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
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

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
