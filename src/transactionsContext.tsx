import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from './services/api';

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <>
      <TransactionsContext.Provider value={transactions}>
        {children}
      </TransactionsContext.Provider>
    </>
  );
}
