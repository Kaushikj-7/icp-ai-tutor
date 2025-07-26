import React from 'react';
import { useAuth } from '../context/InternetIdentityAuth';

function Login() {
  const { login, loading } = useAuth();

  const handleLogin = () => {
    login();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">LearnChain</h1>
          <p className="text-white/80 text-lg mb-8">
            AI-Powered Learning on the Blockchain
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Welcome to LearnChain
            </h2>
            <p className="text-gray-600 mb-8">
              Sign in with Internet Identity to access your personalized AI tutor
            </p>
            
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Sign In with Internet Identity
            </button>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>🔒 Secure decentralized authentication</p>
              <p>🤖 AI-powered personalized learning</p>
              <p>⛓️ Your data stays on the blockchain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
