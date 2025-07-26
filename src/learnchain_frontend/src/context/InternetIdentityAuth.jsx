import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from '@dfinity/agent';

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
  const [authClient, setAuthClient] = useState(null);
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Internet Identity provider URL
  const II_URL = process.env.NODE_ENV === "development" 
    ? `http://localhost:4943/?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai`
    : "https://identity.ic0.app";

  useEffect(() => {
    initAuth();
  }, []);

  const initAuth = async () => {
    try {
      const client = await AuthClient.create();
      setAuthClient(client);

      const isAuthenticated = await client.isAuthenticated();
      
      if (isAuthenticated) {
        const identity = client.getIdentity();
        const principal = identity.getPrincipal().toString();
        
        // Create agent with authenticated identity
        const agent = new HttpAgent({
          identity,
          host: process.env.NODE_ENV === "development" ? "http://localhost:4943" : "https://ic0.app"
        });

        // Fetch root key for local development
        if (process.env.NODE_ENV === "development") {
          await agent.fetchRootKey();
        }

        setIsAuthenticated(true);
        setPrincipal(principal);
        setAgent(agent);
        console.log('Internet Identity authenticated:', principal);
      }
    } catch (error) {
      console.error('Auth initialization failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      if (!authClient) {
        console.error('Auth client not initialized');
        return;
      }

      const result = await authClient.login({
        identityProvider: II_URL,
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000), // 7 days
        onSuccess: async () => {
          const identity = authClient.getIdentity();
          const principal = identity.getPrincipal().toString();
          
          // Create agent with authenticated identity
          const agent = new HttpAgent({
            identity,
            host: process.env.NODE_ENV === "development" ? "http://localhost:4943" : "https://ic0.app"
          });

          // Fetch root key for local development
          if (process.env.NODE_ENV === "development") {
            await agent.fetchRootKey();
          }

          setIsAuthenticated(true);
          setPrincipal(principal);
          setAgent(agent);
          console.log('Internet Identity login successful:', principal);
        },
        onError: (error) => {
          console.error('Internet Identity login failed:', error);
        }
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      if (authClient) {
        await authClient.logout();
        setIsAuthenticated(false);
        setPrincipal('');
        setAgent(null);
        console.log('Internet Identity logout successful');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    isAuthenticated,
    principal,
    agent,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
