
import React from 'react';

interface WalletPanelProps {
  coins: number;
}

const WalletPanel: React.FC<WalletPanelProps> = ({ coins }) => {
  return (
    <a href="#/wallet" className="flex items-center space-x-2 bg-dark-border px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8.433 7.418c.158-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-2.12 2.152H6.88a1 1 0 00-1 1v.083h1.078a2.5 2.5 0 00-2.12 2.152H3.88a1 1 0 00-1 1v.083h1.078a2.5 2.5 0 00-2.12 2.152H1.88a1 1 0 00-1 1V18a1 1 0 001 1h16a1 1 0 001-1v-3.083h-1.078a2.5 2.5 0 00-2.12-2.152H16.12a1 1 0 00-1-1v-.083h-1.078a2.5 2.5 0 00-2.12-2.152H12.12a1 1 0 00-1-1v-.083h-1.078a2.5 2.5 0 00-2.12-2.152V7.418zM10 16a1 1 0 100-2 1 1 0 000 2z" />
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
      </svg>
      <span className="font-semibold text-white">{coins.toLocaleString()}</span>
    </a>
  );
};

export default WalletPanel;
