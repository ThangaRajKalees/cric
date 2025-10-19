
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for demonstration purposes
const MOCK_USER: User = {
  uid: 'xyz123',
  email: 'testuser@example.com',
  displayName: 'Test User',
  photoURL: `https://picsum.photos/seed/user/100`,
  coins: 5000,
  isAdmin: true,
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // TODO: Replace with Firebase Auth onAuthStateChanged listener
  const [user, setUser] = useState<User | null>(MOCK_USER);
  const [loading, setLoading] = useState(false);

  const login = (userData: User) => {
    // In a real app, this would be handled by Firebase Auth
    setUser(userData);
  };

  const logout = () => {
    // In a real app, this would call signOut(auth)
    setUser(null);
  };

  const value = { user, loading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
