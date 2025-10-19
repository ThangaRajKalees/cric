
import React from 'react';
import { useAuth } from '../context/AuthContext';
import WalletPanel from './WalletPanel';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="bg-dark-card border-b border-dark-border shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#/home" className="text-2xl font-bold text-brand-primary flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v1.073a8.5 8.5 0 11-8.073 8.073H2a1 1 0 01-.954-1.299 10.5 10.5 0 1010.254-10.254A1 1 0 0111.3 1.046zM10 4a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            CricketPredict
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-gray-300">
          <a href="#/home" className="hover:text-brand-primary transition-colors">Home</a>
          <a href="#/my-contests" className="hover:text-brand-primary transition-colors">My Contests</a>
          <a href="#/wallet" className="hover:text-brand-primary transition-colors">Wallet</a>
          {user?.isAdmin && <a href="#/admin" className="hover:text-brand-primary transition-colors">Admin</a>}
        </nav>
        <div>
          {user ? (
            <WalletPanel coins={user.coins} />
          ) : (
            <a href="#/login" className="bg-brand-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-brand-secondary transition-colors">
              Login
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
