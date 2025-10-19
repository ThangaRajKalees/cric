
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-brand-primary">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-gray-200">Page Not Found</h2>
      <p className="text-gray-400 mt-2">Sorry, the page you are looking for does not exist.</p>
      <a href="#/home" className="mt-8 inline-block bg-brand-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-secondary transition-colors">
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
