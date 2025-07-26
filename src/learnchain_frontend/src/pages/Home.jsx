import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/InternetIdentityAuth';

function Home() {
  const features = [
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'AI-Powered Learning',
      description: 'Advanced AI technology provides personalized tutoring tailored to your learning style.'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0710 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Secure on ICP',
      description: 'Built on Internet Computer Protocol for security, decentralization, and reliability.'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: 'Personalized Experience',
      description: 'Track your progress and receive customized recommendations based on your learning journey.'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: '24/7 Availability',
      description: 'Access your AI tutor anytime, anywhere. Learn at your own pace with instant support.'
    }
  ];

  const sampleQuestions = [
    {
      subject: 'Mathematics',
      difficulty: 'Beginner',
      question: 'What is the Pythagorean theorem and how do I use it?'
    },
    {
      subject: 'Science',
      difficulty: 'Intermediate',
      question: 'Explain the process of photosynthesis in plants.'
    },
    {
      subject: 'History',
      difficulty: 'Beginner',
      question: 'What were the main causes of World War I?'
    },
    {
      subject: 'Programming',
      difficulty: 'Advanced',
      question: 'How do I implement a binary search tree in Python?'
    }
  ];

  const { isAuthenticated, login } = useAuth();

  const handleGetStarted = () => {
    login();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 min-h-screen flex items-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute -top-4 -right-4 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                LearnChain
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Your AI-powered tutoring platform built on the Internet Computer Protocol. 
              Learn, grow, and excel with personalized AI assistance that adapts to your unique learning style.
            </p>
            
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center md:items-center mb-12">
              {!isAuthenticated ? (
                <button
                  onClick={handleGetStarted}
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Get Started - Sign In
                </button>
              ) : (
                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
                  <Link
                    to="/ask"
                    className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Ask a Question
                  </Link>
                  <Link
                    to="/test"
                    className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Take a Test
                  </Link>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm md:text-base opacity-80">Questions Answered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm md:text-base opacity-80">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                <div className="text-sm md:text-base opacity-80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm md:text-base opacity-80">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LearnChain?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of education with our cutting-edge AI technology built on blockchain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white text-2xl">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Questions Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sample Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a taste of what our AI tutor can help you with across various subjects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sampleQuestions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {item.subject}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    item.difficulty === 'Beginner' 
                      ? 'bg-green-100 text-green-800'
                      : item.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
                <p className="text-gray-900 font-medium text-lg mb-4 leading-relaxed">
                  {item.question}
                </p>
                {isAuthenticated && (
                  <Link
                    to={`/ask?q=${encodeURIComponent(item.question)}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold group"
                  >
                    Ask this question 
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {isAuthenticated && (
            <div className="text-center mt-12">
              <Link
                to="/ask"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Ask Your Own Question
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Subject Areas */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Subject Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI tutor covers a wide range of subjects to support your complete education
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Mathematics', 'Science', 'History', 'Programming', 'Languages', 'Arts'].map((subject, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="text-2xl mb-3">
                  {subject === 'Mathematics' && '📊'}
                  {subject === 'Science' && '🔬'}
                  {subject === 'History' && '📚'}
                  {subject === 'Programming' && '💻'}
                  {subject === 'Languages' && '🌍'}
                  {subject === 'Arts' && '🎨'}
                </div>
                <h3 className="font-bold text-gray-900">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute -top-4 -right-4 w-80 h-80 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-80 h-80 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who are already using LearnChain to accelerate their education 
            and achieve their academic goals with AI-powered assistance.
          </p>
          
          {!isAuthenticated ? (
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-12 py-5 rounded-xl text-xl font-bold hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Learning Today
            </button>
          ) : (
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link
                to="/ask"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Ask a Question
              </Link>
              <Link
                to="/dashboard"
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                View Your Progress
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
