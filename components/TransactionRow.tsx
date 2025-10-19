
import React from 'react';
import { Transaction, TransactionType } from '../types';

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
  const isDebit = transaction.amount < 0;
  const amountColor = isDebit ? 'text-red-400' : 'text-green-400';
  const typeLabels: { [key in TransactionType]: string } = {
    [TransactionType.DEPOSIT]: 'Deposit',
    [TransactionType.WITHDRAWAL]: 'Withdrawal',
    [TransactionType.CONTEST_ENTRY]: 'Contest Entry',
    [TransactionType.CONTEST_WIN]: 'Contest Win',
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(transaction.timestamp);

  return (
    <tr className="border-b border-dark-border hover:bg-dark-card/50">
      <td className="p-4">
        <div className="font-medium text-gray-200">{typeLabels[transaction.type]}</div>
        <div className="text-sm text-gray-400">{transaction.description}</div>
      </td>
      <td className="p-4 text-gray-400 text-sm hidden sm:table-cell">{formattedDate}</td>
      <td className={`p-4 font-semibold text-right ${amountColor}`}>
        {isDebit ? '' : '+'}{transaction.amount.toLocaleString()}
      </td>
    </tr>
  );
};

export default TransactionRow;
