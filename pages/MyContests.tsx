
import React from 'react';

const MyContests: React.FC = () => {
  // TODO: Fetch user's joined contests from Firestore
  // This will likely involve querying an 'entries' collection where userId matches the current user's ID.
  // Then, you would fetch the corresponding contest and match details.

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-brand-light">My Contests</h1>
      
      {/* Placeholder content */}
      <div className="bg-dark-card rounded-lg shadow-lg p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        <h2 className="mt-4 text-xl font-semibold text-gray-200">No Contests Joined Yet</h2>
        <p className="mt-2 text-gray-400">Join a contest from the home page to see it here.</p>
        <a href="#/home" className="mt-6 inline-block bg-brand-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-brand-secondary transition-colors">
          View Matches
        </a>
      </div>

       {/* Example of what a joined contest card would look like */}
       {/*
        <div className="bg-dark-card rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-400">RCB vs MI</p>
                    <h3 className="font-bold text-lg">Mega Contest</h3>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="font-semibold text-blue-400">UPCOMING</p>
                </div>
            </div>
        </div>
       */}

    </div>
  );
};

export default MyContests;
