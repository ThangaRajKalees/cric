
import React, { useState } from 'react';
import { Match, Contest } from '../types';
import { joinContest } from '../services/contestService';

interface JoinModalProps {
  match: Match | null;
  contest: Contest | null;
  onClose: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ match, contest, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleConfirmJoin = async () => {
    if (!match || !contest) return;
    setIsLoading(true);
    setResult(null);
    const res = await joinContest(match, contest);
    setResult(res);
    setIsLoading(false);
  };

  if (!contest || !match) {
    return null;
  }
  
  const handleClose = () => {
    if(isLoading) return;
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity" onClick={handleClose}>
      <div className="bg-dark-card rounded-lg shadow-xl p-6 w-full max-w-md m-4 transform transition-all" onClick={(e) => e.stopPropagation()}>
        {result ? (
          <div>
             <h3 className={`text-2xl font-bold mb-4 ${result.success ? 'text-green-400' : 'text-red-500'}`}>
                {result.success ? 'Success!' : 'Uh Oh!'}
             </h3>
             <p className="text-gray-300">{result.message}</p>
             <button
                onClick={onClose}
                className="mt-6 w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-secondary transition-colors"
              >
                Close
              </button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold mb-2 text-brand-primary">Confirm Entry</h3>
            <p className="text-gray-400 mb-4">You are about to join the "{contest.name}" contest.</p>
            <div className="bg-dark-border/50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-400">Match:</span>
                    <span className="font-semibold text-gray-200">{match.teamA.shortName} vs {match.teamB.shortName}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Entry Fee:</span>
                    <span className="font-semibold text-yellow-400">{contest.entryFee} coins</span>
                </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
                By clicking "Confirm & Join", {contest.entryFee} coins will be deducted from your wallet. This action cannot be undone.
            </p>
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleClose}
                disabled={isLoading}
                className="w-1/2 bg-dark-border text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmJoin}
                disabled={isLoading}
                className="w-1/2 bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Confirm & Join'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
