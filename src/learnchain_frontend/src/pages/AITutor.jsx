import React, { useState } from 'react';
import { useAuth } from '../context/InternetIdentityAuth';

function AITutor() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, principal } = useAuth();

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    try {
      // Call Groq API
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI tutor. Provide clear, educational answers to student questions.'
            },
            {
              role: 'user',
              content: question
            }
          ],
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const aiAnswer = data.choices[0].message.content;
      setAnswer(aiAnswer);

      // TODO: Save to backend canister
      // await saveQA(question, aiAnswer);
      
    } catch (error) {
      console.error('Error getting AI response:', error);
      setAnswer('Sorry, there was an error processing your question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to access the AI Tutor</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Tutor</h1>
            <p className="text-gray-600">Ask any question and get personalized AI assistance</p>
            <p className="text-sm text-blue-600">Signed in as: {principal}</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Question
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask any question about math, science, history, programming, or any subject..."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              onClick={handleAskQuestion}
              disabled={loading || !question.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
            >
              {loading ? 'Getting Answer...' : 'Ask AI Tutor'}
            </button>

            {answer && (
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Response:</h3>
                <div className="prose prose-blue max-w-none">
                  <p className="whitespace-pre-wrap text-gray-800">{answer}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-600">📊</div>
              <div className="text-sm font-medium text-gray-700">Mathematics</div>
            </div>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-600">🔬</div>
              <div className="text-sm font-medium text-gray-700">Science</div>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-600">📚</div>
              <div className="text-sm font-medium text-gray-700">History</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-orange-600">💻</div>
              <div className="text-sm font-medium text-gray-700">Programming</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AITutor;
