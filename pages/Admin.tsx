
import React from 'react';
import { useAuth } from '../context/AuthContext';
import AdminMatchForm from '../components/AdminMatchForm';

const Admin: React.FC = () => {
  const { user, loading } = useAuth();

  const handleFormSubmit = (formData: any) => {
    // TODO: Connect to Firestore to create/update a match document
    alert('Match data submitted! Check console for details.');
    console.log(formData);
  };

  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (!user?.isAdmin) {
    return (
      <div className="text-center bg-dark-card p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-red-500">Access Denied</h1>
        <p className="mt-2 text-gray-400">You do not have permission to view this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-brand-light">Admin Panel</h1>
      <AdminMatchForm onSubmit={handleFormSubmit} />
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Manage Existing Matches</h2>
        <div className="bg-dark-card rounded-lg p-6 text-center text-gray-500">
            <p>Existing matches list would appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
