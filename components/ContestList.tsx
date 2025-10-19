
import React, { useState } from 'react';
import { Contest, Match } from '../types';
import JoinModal from './JoinModal';

interface ContestListProps {
  match: Match;
}

const ContestList: React.FC<ContestListProps> = ({ match }) => {
  const [selectedContest, setSelectedContest] = useState<Contest | null>(null);

  const handleJoinClick = (contest: Contest) => {
    setSelectedContest(contest);
  };

  const handleCloseModal = () => {
    setSelectedContest(null);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-brand-light">Contests</h2>
      <div className="space-y-4">
        {match.contests.map((contest) => (
          <div key={contest.id} className="bg-dark-card rounded-lg shadow p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-grow">
              <h3 className="font-bold text-lg text-gray-200">{contest.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                <span>Prize Pool: <span className="font-semibold text-yellow-400">{contest.prizePool.toLocaleString()} coins</span></span>
                <span>Entry: <span className="font-semibold text-red-400">{contest.entryFee} coins</span></span>
              </div>
            </div>
            <div className="w-full sm:w-auto flex items-center gap-4">
              <div className="flex-grow">
                <div className="w-full bg-dark-border rounded-full h-2.5">
                  <div 
                    className="bg-brand-primary h-2.5 rounded-full" 
                    style={{ width: `${(contest.spotsFilled / contest.totalSpots) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">
                  {contest.spotsFilled} / {contest.totalSpots} spots filled
                </div>
              </div>
              <button
                onClick={() => handleJoinClick(contest)}
                className="bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-secondary transition-colors whitespace-nowrap"
              >
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
      <JoinModal match={match} contest={selectedContest} onClose={handleCloseModal} />
    </div>
  );
};

export default ContestList;
