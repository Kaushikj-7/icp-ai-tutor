import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/InternetIdentityAuth';

function Dashboard() {
  const [stats, setStats] = useState({ total_questions: 0, total_answers: 0 });
  const [qaHistory, setQaHistory] = useState([]);
  const { isAuthenticated, principal, logout } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      // TODO: Fetch user stats and QA history from backend canister
      // fetchUserStats();
      // fetchQAHistory();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to access the Dashboard</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back to LearnChain!</p>
              <p className="text-sm text-blue-600">Principal: {principal}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl">
            <div className="text-3xl font-bold">{stats.total_questions}</div>
            <div className="text-blue-100">Questions Asked</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl">
            <div className="text-3xl font-bold">{stats.total_answers}</div>
            <div className="text-green-100">Answers Received</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl">
            <div className="text-3xl font-bold">95%</div>
            <div className="text-purple-100">Success Rate</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-orange-100">AI Available</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Learning Activity</h2>
          
          {qaHistory.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No questions yet</h3>
              <p className="text-gray-500 mb-6">Start asking questions to see your learning history here</p>
              <a
                href="/tutor"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Ask Your First Question
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {qaHistory.map((qa, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900">Question:</h4>
                    <p className="text-gray-700">{qa.question}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900">Answer:</h4>
                    <p className="text-gray-700">{qa.answer}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(qa.timestamp / 1000000).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/tutor"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-3xl mb-2">🤖</div>
              <div className="font-semibold">Ask AI Tutor</div>
              <div className="text-sm text-blue-100">Get instant help</div>
            </a>
            <a
              href="/test"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-3xl mb-2">📝</div>
              <div className="font-semibold">Take a Test</div>
              <div className="text-sm text-green-100">Test your knowledge</div>
            </a>
            <a
              href="/progress"
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-3xl mb-2">📊</div>
              <div className="font-semibold">View Progress</div>
              <div className="text-sm text-purple-100">Track your learning</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
