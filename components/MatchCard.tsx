
import React from 'react';
import { Match, MatchStatus } from '../types';
import TeamLogo from './icons/TeamLogo';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const statusColors: { [key in MatchStatus]: string } = {
    [MatchStatus.UPCOMING]: 'text-blue-400 border-blue-400',
    [MatchStatus.LIVE]: 'text-red-500 border-red-500 animate-pulse',
    [MatchStatus.FINISHED]: 'text-gray-400 border-gray-400',
    [MatchStatus.PENDING]: 'text-yellow-400 border-yellow-400',
  };

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <a href={`#/match/${match.id}`} className="block bg-dark-card rounded-xl shadow-lg hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="p-4 border-b border-dark-border flex justify-between items-center text-sm text-gray-400">
        <span>{match.venue}</span>
        <span className={`px-2 py-0.5 border rounded-full text-xs font-semibold ${statusColors[match.status]}`}>
          {match.status}
        </span>
      </div>
      <div className="p-5 flex justify-between items-center">
        <div className="flex flex-col items-center gap-2 w-1/3">
          <TeamLogo logoId={match.teamA.logo} />
          <span className="font-semibold text-center text-gray-200">{match.teamA.name}</span>
        </div>
        <div className="text-center w-1/3">
          <div className="text-gray-400 text-sm">{dateFormatter.format(match.startTime)}</div>
          <div className="text-xl font-bold my-1 text-gray-200">{timeFormatter.format(match.startTime)}</div>
          <div className="text-gray-500 text-xs">IST</div>
        </div>
        <div className="flex flex-col items-center gap-2 w-1/3">
          <TeamLogo logoId={match.teamB.logo} />
          <span className="font-semibold text-center text-gray-200">{match.teamB.name}</span>
        </div>
      </div>
       <div className="bg-dark-border/50 text-center py-2 text-brand-primary font-semibold">
        {match.contests.length} Contests Available
      </div>
    </a>
  );
};

export default MatchCard;
