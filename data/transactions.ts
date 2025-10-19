
import { Transaction, TransactionType } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: 'txn-1',
    userId: 'xyz123',
    type: TransactionType.DEPOSIT,
    amount: 1000,
    description: 'Initial deposit',
    timestamp: new Date(new Date().setDate(new Date().getDate() - 5)),
  },
  {
    id: 'txn-2',
    userId: 'xyz123',
    type: TransactionType.CONTEST_ENTRY,
    amount: -50,
    description: 'Mega Contest (RCB vs MI)',
    timestamp: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
  {
    id: 'txn-3',
    userId: 'xyz123',
    type: TransactionType.CONTEST_WIN,
    amount: 250,
    description: 'Winner Takes All (RR vs PBKS)',
    timestamp: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
    {
    id: 'txn-4',
    userId: 'xyz123',
    type: TransactionType.CONTEST_ENTRY,
    amount: -100,
    description: 'Head-to-Head (SRH vs DC)',
    timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    id: 'txn-5',
    userId: 'xyz123',
    type: TransactionType.WITHDRAWAL,
    amount: -500,
    description: 'Bank Transfer',
    timestamp: new Date(),
  },
];
