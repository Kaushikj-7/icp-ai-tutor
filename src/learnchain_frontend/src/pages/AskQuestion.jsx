import React, { useState } from 'react';
import { generateAIAnswer, getMockAnswer } from '../services/aiServiceSimple';
import { useAuth } from '../context/InternetIdentityAuth';
import { LearnChainService } from '../services/learnchainService';

export default function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const { agent, isAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    try {
      // Try AI service first, fallback to mock if needed
      let response;
      if (import.meta.env.VITE_GROQ_API_KEY) {
        response = await generateAIAnswer(question);
      } else {
        response = getMockAnswer(question);
      }
      setAnswer(response);

      // Save to blockchain if authenticated
      if (isAuthenticated && agent) {
        try {
          const learnchainService = new LearnChainService(agent);
          await learnchainService.saveQA(question, response);
          console.log('Q&A saved to blockchain successfully');
        } catch (blockchainError) {
          console.error('Failed to save to blockchain:', blockchainError);
          // Continue even if blockchain save fails
        }
      }
    } catch (error) {
      console.error('Error getting answer:', error);
      setAnswer(getMockAnswer(question));
    } finally {
      setLoading(false);
    }
  };

  const handleQuickQuestion = async (quickQuestion) => {
    setQuestion(quickQuestion);
    setLoading(true);
    try {
      let response;
      if (import.meta.env.VITE_GROQ_API_KEY) {
        response = await generateAIAnswer(quickQuestion);
      } else {
        response = getMockAnswer(quickQuestion);
      }
      setAnswer(response);
    } catch (error) {
      setAnswer(getMockAnswer(quickQuestion));
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    "What is photosynthesis and how does it work?",
    "Explain quantum computing in simple terms",
    "How do neural networks learn?",
    "What are the principles of organic chemistry?",
    "Solve this math problem: 2x + 5 = 15",
    "What causes climate change?"
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ask Your <span className="text-blue-600">AI Tutor</span>
        </h1>
        <p className="text-xl text-gray-600">
          Get instant, helpful explanations on any topic
        </p>
      </div>

      {/* Question Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
              Your Question
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me anything you'd like to learn about..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? '🤔 Thinking...' : '🚀 Get Answer'}
          </button>
        </form>
      </div>

      {/* Quick Questions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Questions</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {sampleQuestions.map((q, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(q)}
              className="text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <span className="text-sm text-gray-700">"{q}"</span>
            </button>
          ))}
        </div>
      </div>

      {/* Answer Display */}
      {answer && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            🤖 AI Tutor's Answer
          </h3>
          <div className="prose max-w-none">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {answer}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-200">
            <button
              onClick={() => {
                setQuestion('');
                setAnswer('');
              }}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Ask Another Question →
            </button>
          </div>
        </div>
      )}

      {/* API Status */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          {import.meta.env.VITE_GROQ_API_KEY 
            ? "✅ AI service configured - Real AI responses enabled"
            : "⚠️ No API key found - Using mock responses. Add VITE_GROQ_API_KEY to .env for real AI"}
        </p>
      </div>
    </div>
  );
}
