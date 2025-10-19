
import React, { useState, useEffect } from 'react';
import { Match } from '../types';
import { mockMatches } from '../data/matches';
import TeamLogo from '../components/icons/TeamLogo';
import ContestList from '../components/ContestList';
import NotFound from './NotFound';

interface MatchDetailProps {
  matchId?: string;
}

const MatchDetail: React.FC<MatchDetailProps> = ({ matchId }) => {
  const [match, setMatch] = useState<Match | null | undefined>(undefined);

  useEffect(() => {
    // TODO: Replace with a Firestore listener to get a single match document
    if (matchId) {
      const foundMatch = mockMatches.find(m => m.id === matchId) || null;
      setMatch(foundMatch);
    }
  }, [matchId]);

  if (match === undefined) {
    return <div className="text-center p-10 text-gray-400">Loading...</div>;
  }

  if (match === null) {
    return <NotFound />;
  }

  const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'medium' });
  const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' });

  return (
    <div>
      <div className="bg-dark-card rounded-xl shadow-lg p-6 mb-8">
        <div className="text-center mb-6">
          <p className="text-gray-400">{match.venue}</p>
          <p className="text-gray-400">{dateFormatter.format(match.startTime)} - {timeFormatter.format(match.startTime)}</p>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center gap-3 w-2/5">
            <TeamLogo logoId={match.teamA.logo} size="lg" />
            <h2 className="text-2xl font-bold text-center text-gray-200">{match.teamA.name}</h2>
          </div>
          <div className="text-4xl font-light text-gray-500">VS</div>
          <div className="flex flex-col items-center gap-3 w-2/5">
            <TeamLogo logoId={match.teamB.logo} size="lg" />
            <h2 className="text-2xl font-bold text-center text-gray-200">{match.teamB.name}</h2>
          </div>
        </div>
      </div>

      <ContestList match={match} />
    </div>
  );
};

export default MatchDetail;
