
import { Match, MatchStatus, Contest } from '../types';

const generateContests = (matchId: string): Contest[] => [
  {
    id: `${matchId}-c1`,
    matchId,
    name: 'Mega Contest',
    entryFee: 50,
    prizePool: 10000,
    totalSpots: 250,
    spotsFilled: 105,
  },
  {
    id: `${matchId}-c2`,
    matchId,
    name: 'Head-to-Head',
    entryFee: 100,
    prizePool: 180,
    totalSpots: 2,
    spotsFilled: 1,
  },
  {
    id: `${matchId}-c3`,
    matchId,
    name: 'Winner Takes All',
    entryFee: 25,
    prizePool: 225,
    totalSpots: 10,
    spotsFilled: 7,
  },
];

export const mockMatches: Match[] = [
  {
    id: 'match-1',
    teamA: { name: 'Royal Challengers', shortName: 'RCB', logo: 'rcb' },
    teamB: { name: 'Mumbai Indians', shortName: 'MI', logo: 'mi' },
    startTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // 2 hours from now
    status: MatchStatus.UPCOMING,
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
    contests: generateContests('match-1'),
  },
  {
    id: 'match-2',
    teamA: { name: 'Chennai Super Kings', shortName: 'CSK', logo: 'csk' },
    teamB: { name: 'Kolkata Knight Riders', shortName: 'KKR', logo: 'kkr' },
    startTime: new Date(new Date().getTime() + 26 * 60 * 60 * 1000), // 26 hours from now
    status: MatchStatus.UPCOMING,
    venue: 'M. A. Chidambaram Stadium, Chennai',
    contests: generateContests('match-2'),
  },
  {
    id: 'match-3',
    teamA: { name: 'Sunrisers Hyderabad', shortName: 'SRH', logo: 'srh' },
    teamB: { name: 'Delhi Capitals', shortName: 'DC', logo: 'dc' },
    startTime: new Date(new Date().getTime() - 1 * 60 * 60 * 1000), // 1 hour ago (Live)
    status: MatchStatus.LIVE,
    venue: 'Rajiv Gandhi Intl. Cricket Stadium, Hyderabad',
    contests: generateContests('match-3'),
  },
  {
    id: 'match-4',
    teamA: { name: 'Rajasthan Royals', shortName: 'RR', logo: 'rr' },
    teamB: { name: 'Punjab Kings', shortName: 'PBKS', logo: 'pbks' },
    startTime: new Date(new Date().getTime() - 48 * 60 * 60 * 1000), // 2 days ago
    status: MatchStatus.FINISHED,
    venue: 'Sawai Mansingh Stadium, Jaipur',
    contests: generateContests('match-4'),
  },
];
