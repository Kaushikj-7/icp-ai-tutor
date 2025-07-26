import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateAIAnswer = async (question) => {
  try {
    if (!import.meta.env.VITE_GROQ_API_KEY) {
      return "Please set your GROQ API key in the .env file to use AI features.";
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful AI tutor. Provide clear, educational explanations to help students learn. Keep answers concise but informative."
        },
        {
          role: "user",
          content: question
        }
      ],
      model: "llama3-8b-8192",
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0]?.message?.content || "Sorry, I couldn't generate an answer.";
  } catch (error) {
    console.error('AI Service Error:', error);
    if (error.message.includes('API key')) {
      return "API key error. Please check your GROQ API key configuration.";
    }
    return "Sorry, I'm having trouble processing your question right now. Please try again.";
  }
};

// Mock function for when API is not available
export const getMockAnswer = (question) => {
  const mockAnswers = {
    "photosynthesis": "Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen. It occurs in chloroplasts and is essential for life on Earth.",
    "quantum": "Quantum computing uses quantum bits (qubits) that can exist in multiple states simultaneously, allowing for exponentially faster calculations for certain problems compared to classical computers.",
    "neural": "Neural networks learn through a process called backpropagation, where they adjust weights and biases based on the difference between predicted and actual outcomes.",
    "chemistry": "Organic chemistry principles include understanding carbon bonding, functional groups, reaction mechanisms, and how molecular structure affects properties and reactivity.",
    "2x + 5 = 15": "To solve 2x + 5 = 15: Subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5.",
    "climate": "Climate change is primarily caused by greenhouse gas emissions from human activities, which trap heat in the atmosphere and lead to global warming."
  };

  const key = Object.keys(mockAnswers).find(k => question.toLowerCase().includes(k));
  return key ? mockAnswers[key] : "This is a mock answer. Please configure your AI service for real responses.";
};