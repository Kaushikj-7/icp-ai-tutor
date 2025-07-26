import { Actor } from '@dfinity/agent';

// Canister ID - will be set from environment or DFX generated files
const CANISTER_ID = import.meta.env.VITE_LEARNCHAIN_BACKEND_CANISTER_ID || 'be2us-64aaa-aaaaa-qaabq-cai';

// Simple IDL factory for our backend - you can replace this with generated declarations
const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const QAPair = IDL.Record({
    'question' : IDL.Text,
    'answer' : IDL.Text,
    'timestamp' : IDL.Nat64,
  });
  const UserStats = IDL.Record({
    'total_questions' : IDL.Nat64,
    'total_answers' : IDL.Nat64,
  });
  
  return IDL.Service({
    'save_qa' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'get_user_qa' : IDL.Func([], [IDL.Vec(QAPair)], ['query']),
    'get_user_stats' : IDL.Func([], [UserStats], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};

export class LearnChainService {
  constructor(agent) {
    this.agent = agent;
    this.actor = null;
    this.initActor();
  }

  initActor() {
    if (this.agent) {
      this.actor = Actor.createActor(idlFactory, {
        agent: this.agent,
        canisterId: CANISTER_ID,
      });
    }
  }

  // Save Q&A pair to blockchain
  async saveQA(question, answer) {
    try {
      if (!this.actor) {
        throw new Error('Actor not initialized. Please authenticate first.');
      }
      const result = await this.actor.save_qa(question, answer);
      return result;
    } catch (error) {
      console.error('Error saving Q&A:', error);
      throw error;
    }
  }

  // Get user's Q&A history from blockchain
  async getUserQA() {
    try {
      if (!this.actor) {
        throw new Error('Actor not initialized. Please authenticate first.');
      }
      const result = await this.actor.get_user_qa();
      return result;
    } catch (error) {
      console.error('Error getting user Q&A:', error);
      throw error;
    }
  }

  // Get user statistics
  async getUserStats() {
    try {
      if (!this.actor) {
        throw new Error('Actor not initialized. Please authenticate first.');
      }
      const result = await this.actor.get_user_stats();
      return result;
    } catch (error) {
      console.error('Error getting user stats:', error);
      throw error;
    }
  }

  // Test greeting function
  async greet(name) {
    try {
      if (!this.actor) {
        throw new Error('Actor not initialized. Please authenticate first.');
      }
      const result = await this.actor.greet(name);
      return result;
    } catch (error) {
      console.error('Error greeting:', error);
      throw error;
    }
  }
}
