import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/InternetIdentityAuth';

export default function Navbar() {
  const { isAuthenticated, login, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl">🧠</div>
            <span className="text-xl font-bold text-gray-900">
              Learn<span className="text-blue-600">Chain</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            
            {isAuthenticated && (
              <>
                <Link 
                  to="/ask"
                  className={`font-medium transition-colors ${
                    isActive('/ask') 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Ask Question
                </Link>
                <Link 
                  to="/test"
                  className={`font-medium transition-colors ${
                    isActive('/test') 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Take Test
                </Link>
                <Link 
                  to="/dashboard"
                  className={`font-medium transition-colors ${
                    isActive('/dashboard') 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>

          {/* Auth Button */}
          <div>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={login}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isAuthenticated && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/ask"
                className={`py-2 px-4 rounded font-medium transition-colors ${
                  isActive('/ask') 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Ask Question
              </Link>
              <Link 
                to="/test"
                className={`py-2 px-4 rounded font-medium transition-colors ${
                  isActive('/test') 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Take Test
              </Link>
              <Link 
                to="/dashboard"
                className={`py-2 px-4 rounded font-medium transition-colors ${
                  isActive('/dashboard') 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
