
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockTransactions } from '../data/transactions';
import { Transaction } from '../types';
import TransactionRow from '../components/TransactionRow';

const Wallet: React.FC = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    // TODO: Replace with Firestore listener to get user's transactions
    if (user) {
      setTransactions(mockTransactions.filter(t => t.userId === user.uid));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Please log in to view your wallet.</h1>
        <a href="#/login" className="mt-4 inline-block bg-brand-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-brand-secondary transition-colors">
          Login
        </a>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-brand-light">My Wallet</h1>
      
      <div className="bg-dark-card rounded-lg shadow-lg p-6 mb-8 text-center">
        <p className="text-gray-400 text-lg">Current Balance</p>
        <p className="text-5xl font-bold text-yellow-400 my-2 flex items-center justify-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.433 7.418c.158-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-2.12 2.152H6.88a1 1 0 00-1 1v.083h1.078a2.5 2.5 0 00-2.12 2.152H3.88a1 1 0 00-1 1v.083h1.078a2.5 2.5 0 00-2.12 2.152H1.88a1 1 0 00-1 1V18a1 1 0 001 1h16a1 1 0 001-1v-3.083h-1.078a2.5 2.5 0 00-2.12-2.152H16.12a1 1 0 00-1-1v-.083h-1.078a2.5 2.5 0 00-2.12-2.152H12.12a1 1 0 00-1-1v-.083h-1.078a2.5 2.5 0 00-2.12-2.152V7.418zM10 16a1 1 0 100-2 1 1 0 000 2z" />
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
          {user.coins.toLocaleString()}
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-brand-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-brand-secondary transition-colors">Add Coins</button>
          <button className="bg-dark-border text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-600 transition-colors">Withdraw</button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-brand-light">Transaction History</h2>
      <div className="bg-dark-card rounded-lg shadow-lg overflow-hidden">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-dark-border">
            <tr>
              <th scope="col" className="p-4">Details</th>
              <th scope="col" className="p-4 hidden sm:table-cell">Date</th>
              <th scope="col" className="p-4 text-right">Amount (coins)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => <TransactionRow key={tx.id} transaction={tx} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
