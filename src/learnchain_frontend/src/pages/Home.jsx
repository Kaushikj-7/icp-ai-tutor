import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/MockAuthContext';

export default function Home() {
  const { isAuthenticated, login } = useAuth();

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      login();
    }
  };

  const sampleQuestions = [
    {
      subject: "Mathematics",
      question: "What is the derivative of x²?",
      difficulty: "Beginner"
    },
    {
      subject: "Physics",
      question: "Explain Newton's first law of motion",
      difficulty: "Intermediate"
    },
    {
      subject: "Chemistry",
      question: "What is the difference between ionic and covalent bonds?",
      difficulty: "Intermediate"
    },
    {
      subject: "Computer Science",
      question: "What is Big O notation?",
      difficulty: "Advanced"
    }
  ];

  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Learning",
      description: "Get instant answers to your questions from our advanced AI tutor trained on diverse academic subjects."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and personalized insights."
    },
    {
      icon: "🎯",
      title: "Interactive Tests",
      description: "Test your knowledge with adaptive quizzes that adjust to your skill level."
    },
    {
      icon: "🌍",
      title: "Decentralized",
      description: "Built on Internet Computer Protocol for secure, transparent, and censorship-resistant education."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LearnChain
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your AI-powered tutoring platform built on the Internet Computer Protocol. 
              Learn, grow, and excel with personalized AI assistance.
            </p>
            
            {!isAuthenticated ? (
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started - Sign In
              </button>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/ask"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block"
                >
                  Ask a Question
                </Link>
                <Link
                  to="/test"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg border border-gray-200 inline-block"
                >
                  Take a Test
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose LearnChain?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of education with our cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Questions Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sample Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a taste of what our AI tutor can help you with
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sampleQuestions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.subject}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.difficulty === 'Beginner' 
                      ? 'bg-green-100 text-green-800'
                      : item.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
                <p className="text-gray-900 font-medium text-lg">
                  {item.question}
                </p>
                {isAuthenticated && (
                  <Link
                    to={`/ask?q=${encodeURIComponent(item.question)}`}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Ask this question →
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {isAuthenticated && (
            <div className="text-center mt-12">
              <Link
                to="/ask"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Ask Your Own Question
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using LearnChain to accelerate their education
          </p>
          
          {!isAuthenticated ? (
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Learning Today
            </button>
          ) : (
            <div className="space-x-4">
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block"
              >
                Go to Dashboard
              </Link>
              <Link
                to="/ask"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg border border-gray-200 inline-block"
              >
                Ask a Question
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
