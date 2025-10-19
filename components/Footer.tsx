
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} CricketPredict. All Rights Reserved.</p>
        <p className="text-sm mt-1">This is a demo application. Please play responsibly.</p>
      </div>
    </footer>
  );
};

export default Footer;
