import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [principal, setPrincipal] = useState('');

  const login = () => {
    // Mock login - in real app this would use Internet Identity
    setIsAuthenticated(true);
    setPrincipal('mock-principal-id-123456789');
    console.log('Mock login successful');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setPrincipal('');
    console.log('Logged out');
  };

  const value = {
    isAuthenticated,
    principal,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
