
import React, { useState } from 'react';
import { Match, MatchStatus } from '../types';

interface AdminMatchFormProps {
  match?: Match | null;
  onSubmit: (formData: any) => void;
}

const AdminMatchForm: React.FC<AdminMatchFormProps> = ({ match, onSubmit }) => {
  // A more robust form would use a library like react-hook-form
  const [formData, setFormData] = useState({
    teamA: match?.teamA.name || '',
    teamB: match?.teamB.name || '',
    venue: match?.venue || '',
    startTime: match?.startTime.toISOString().substring(0, 16) || '',
    status: match?.status || MatchStatus.UPCOMING,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form validation
    console.log('Submitting match data:', formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark-card p-6 rounded-lg shadow-lg space-y-6">
      <h3 className="text-xl font-bold text-brand-light">{match ? 'Edit Match' : 'Add New Match'}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="teamA" className="block text-sm font-medium text-gray-400 mb-1">Team A</label>
          <input type="text" name="teamA" id="teamA" value={formData.teamA} onChange={handleChange} className="w-full bg-dark-border rounded-md p-2 text-white border-2 border-transparent focus:border-brand-primary focus:ring-0" />
        </div>
        <div>
          <label htmlFor="teamB" className="block text-sm font-medium text-gray-400 mb-1">Team B</label>
          <input type="text" name="teamB" id="teamB" value={formData.teamB} onChange={handleChange} className="w-full bg-dark-border rounded-md p-2 text-white border-2 border-transparent focus:border-brand-primary focus:ring-0" />
        </div>
      </div>
       <div>
        <label htmlFor="venue" className="block text-sm font-medium text-gray-400 mb-1">Venue</label>
        <input type="text" name="venue" id="venue" value={formData.venue} onChange={handleChange} className="w-full bg-dark-border rounded-md p-2 text-white border-2 border-transparent focus:border-brand-primary focus:ring-0" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-400 mb-1">Start Time</label>
          <input type="datetime-local" name="startTime" id="startTime" value={formData.startTime} onChange={handleChange} className="w-full bg-dark-border rounded-md p-2 text-white border-2 border-transparent focus:border-brand-primary focus:ring-0" />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-400 mb-1">Status</label>
          <select name="status" id="status" value={formData.status} onChange={handleChange} className="w-full bg-dark-border rounded-md p-2 text-white border-2 border-transparent focus:border-brand-primary focus:ring-0">
            {Object.values(MatchStatus).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <button type="submit" className="w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-secondary transition-colors">
          {match ? 'Save Changes' : 'Create Match'}
        </button>
      </div>
    </form>
  );
};

export default AdminMatchForm;
