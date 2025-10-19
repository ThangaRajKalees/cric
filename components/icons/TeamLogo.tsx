
import React from 'react';

interface TeamLogoProps {
  logoId: string;
  size?: 'sm' | 'md' | 'lg';
}

const TeamLogo: React.FC<TeamLogoProps> = ({ logoId, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  // In a real app, you might have SVG imports or image URLs.
  // Here, we use a simple placeholder with the team's initials.
  const colors: { [key: string]: string } = {
    rcb: 'bg-red-600',
    mi: 'bg-blue-600',
    csk: 'bg-yellow-400 text-black',
    kkr: 'bg-purple-800',
    srh: 'bg-orange-500',
    dc: 'bg-blue-800',
    rr: 'bg-pink-600',
    pbks: 'bg-red-500',
  };

  return (
    <div className={`rounded-full flex items-center justify-center font-bold text-white ${sizeClasses[size]} ${colors[logoId.toLowerCase()] || 'bg-gray-500'}`}>
      {logoId.toUpperCase()}
    </div>
  );
};

export default TeamLogo;
