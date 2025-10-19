
import React, { useState, useEffect } from 'react';
import { Match, MatchStatus } from '../types';
import { mockMatches } from '../data/matches';
import MatchCard from '../components/MatchCard';

const Home: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with Firestore listener to get real-time match updates
    setLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      setMatches(mockMatches);
      setLoading(false);
    }, 500);
  }, []);

  const upcomingMatches = matches.filter(m => m.status === MatchStatus.UPCOMING);
  const liveMatches = matches.filter(m => m.status === MatchStatus.LIVE);

  if (loading) {
    return (
      <div className="text-center p-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
        <p className="mt-4 text-gray-400">Loading Matches...</p>
      </div>
    );
  }

  return (
    <div>
      {liveMatches.length > 0 && (
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-6 text-red-500 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Live Matches
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h1 className="text-3xl font-bold mb-6 text-brand-light">Upcoming Matches</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
