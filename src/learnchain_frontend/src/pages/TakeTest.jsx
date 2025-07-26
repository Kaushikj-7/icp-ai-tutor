import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TakeTest() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const subjects = [
    { id: 'math', name: 'Mathematics', icon: '🔢' },
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'history', name: 'History', icon: '📜' },
    { id: 'literature', name: 'Literature', icon: '📖' },
    { id: 'geography', name: 'Geography', icon: '🌍' }
  ];

  const sampleQuestions = {
    math: [
      {
        question: "What is 15 + 27?",
        options: ["42", "41", "43", "40"],
        correct: 0
      },
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correct: 2
      },
      {
        question: "If 2x + 5 = 15, what is x?",
        options: ["5", "10", "3", "7"],
        correct: 0
      }
    ],
    science: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Ag", "Gd"],
        correct: 1
      },
      {
        question: "How many bones are in an adult human body?",
        options: ["206", "205", "207", "204"],
        correct: 0
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2
      }
    ]
  };

  const startTest = (subject) => {
    setSelectedSubject(subject);
    setTestStarted(true);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (answerIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answerIndex
    });
  };

  const nextQuestion = () => {
    const questions = sampleQuestions[selectedSubject] || [];
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const questions = sampleQuestions[selectedSubject] || [];
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++;
      }
    });
    return { correct, total: questions.length };
  };

  const resetTest = () => {
    setTestStarted(false);
    setSelectedSubject('');
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (!testStarted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Take a <span className="text-blue-600">Knowledge Test</span>
          </h1>
          <p className="text-xl text-gray-600">
            Challenge yourself and test your understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => startTest(subject.id)}
            >
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{subject.name}</h3>
                <p className="text-gray-600 mb-4">
                  Test your knowledge in {subject.name.toLowerCase()}
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Test
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link 
            to="/dashboard" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score.correct / score.total) * 100);
    
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Test Complete! 🎉</h1>
          
          <div className="text-6xl font-bold text-blue-600 mb-4">{percentage}%</div>
          
          <p className="text-xl text-gray-600 mb-6">
            You got {score.correct} out of {score.total} questions correct
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <div className="space-y-4">
            <button
              onClick={resetTest}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Take Another Test
            </button>
            <Link 
              to="/ask"
              className="block w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Ask AI Tutor Questions
            </Link>
            <Link 
              to="/dashboard"
              className="block text-blue-600 hover:text-blue-800 font-medium"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const questions = sampleQuestions[selectedSubject] || [];
  const currentQ = questions[currentQuestion];
  const subjectName = subjects.find(s => s.id === selectedSubject)?.name || '';

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{subjectName} Test</h1>
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQ?.question}
          </h2>

          <div className="space-y-3">
            {currentQ?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  answers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={resetTest}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Exit Test
          </button>
          <button
            onClick={nextQuestion}
            disabled={answers[currentQuestion] === undefined}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
}
