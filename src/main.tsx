import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { globalStyles } from './styles/global.ts';
import { Model, createServer } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
