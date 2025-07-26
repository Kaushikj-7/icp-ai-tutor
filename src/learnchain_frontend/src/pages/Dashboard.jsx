import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/MockAuthContext';

export default function Dashboard() {
  const { principal } = useAuth();

  // Mock data - in real app this would come from the backend canister
  const mockStats = {
    totalQuestions: 42,
    totalAnswers: 42,
    streak: 7,
    favoriteSubjects: ['Math', 'Science', 'History']
  };

  const recentQuestions = [
    { question: "What is photosynthesis?", timestamp: "2 hours ago", subject: "Biology" },
    { question: "Solve 2x + 5 = 15", timestamp: "1 day ago", subject: "Math" },
    { question: "Explain quantum computing", timestamp: "2 days ago", subject: "Computer Science" },
    { question: "What causes climate change?", timestamp: "3 days ago", subject: "Environmental Science" }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Learning <span className="text-blue-600">Dashboard</span>
        </h1>
        <p className="text-xl text-gray-600">
          Track your progress and continue your learning journey
        </p>
      </div>

      {/* User Info */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
        <p className="opacity-90 mb-4">
          Principal: <code className="bg-black bg-opacity-20 px-2 py-1 rounded text-xs">{principal}</code>
        </p>
        <div className="flex space-x-4">
          <Link 
            to="/ask" 
            className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Ask Question
          </Link>
          <Link 
            to="/test" 
            className="bg-blue-600 bg-opacity-20 text-white px-4 py-2 rounded font-semibold hover:bg-opacity-30 transition-colors border border-white border-opacity-30"
          >
            Take Test
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{mockStats.totalQuestions}</div>
          <div className="text-gray-600">Questions Asked</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">{mockStats.totalAnswers}</div>
          <div className="text-gray-600">Answers Received</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">{mockStats.streak}</div>
          <div className="text-gray-600">Day Streak</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{mockStats.favoriteSubjects.length}</div>
          <div className="text-gray-600">Subjects Explored</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Recent Questions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Questions</h3>
          <div className="space-y-4">
            {recentQuestions.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-400 pl-4">
                <p className="font-medium text-gray-900">"{item.question}"</p>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{item.subject}</span>
                  <span>{item.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/ask" 
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Ask Another Question →
          </Link>
        </div>

        {/* Favorite Subjects */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Favorite Subjects</h3>
          <div className="space-y-3">
            {mockStats.favoriteSubjects.map((subject, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{subject}</span>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                    <div 
                      className="h-2 bg-blue-500 rounded-full" 
                      style={{ width: `${80 - index * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{80 - index * 10}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link 
            to="/ask"
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
          >
            <div className="text-2xl mb-2">❓</div>
            <div className="font-semibold text-gray-900">Ask Question</div>
            <div className="text-sm text-gray-600">Get AI help instantly</div>
          </Link>
          <Link 
            to="/test"
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
          >
            <div className="text-2xl mb-2">📝</div>
            <div className="font-semibold text-gray-900">Take Test</div>
            <div className="text-sm text-gray-600">Challenge yourself</div>
          </Link>
          <Link 
            to="/subjects"
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
          >
            <div className="text-2xl mb-2">📚</div>
            <div className="font-semibold text-gray-900">Browse Subjects</div>
            <div className="text-sm text-gray-600">Explore topics</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
