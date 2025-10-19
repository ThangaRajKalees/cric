
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  coins: number;
  isAdmin?: boolean;
}

export interface Team {
  name: string;
  logo: string; // Could be a URL or an identifier for a local asset
  shortName: string;
}

export enum MatchStatus {
  UPCOMING = 'UPCOMING',
  LIVE = 'LIVE',
  FINISHED = 'FINISHED',
  PENDING = 'PENDING',
}

export interface Match {
  id: string;
  teamA: Team;
  teamB: Team;
  startTime: Date;
  status: MatchStatus;
  venue: string;
  contests: Contest[];
}

export interface Contest {
  id: string;
  matchId: string;
  name: string;
  entryFee: number;
  prizePool: number;
  totalSpots: number;
  spotsFilled: number;
}

export interface Entry {
  id: string;
  userId: string;
  contestId: string;
  matchId: string;
  // Predictions would go here
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  CONTEST_ENTRY = 'CONTEST_ENTRY',
  CONTEST_WIN = 'CONTEST_WIN',
}

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  description: string;
  timestamp: Date;
}
