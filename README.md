# LearnChain 🧠

**A decentralized AI tutoring platform built on the Internet Computer Protocol (ICP)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Internet Computer](https://img.shields.io/badge/Internet-Computer-29ABE2.svg)](https://internetcomputer.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)](https://reactjs.org/)
[![Rust](https://img.shields.io/badge/Rust-Latest-000000.svg)](https://www.rust-lang.org/)

LearnChain is your personal AI tutor that runs entirely on the Internet Computer blockchain. Ask questions about any subject and get helpful explanations to improve your understanding, all while maintaining complete privacy and data ownership.

---

## ✨ Features

- 🤖 **AI-Powered Learning:** Get instant answers to questions on any subject using advanced AI models
- 🔐 **Internet Identity:** Secure authentication with Internet Identity ensures privacy and data ownership
- 📚 **Personal Study History:** Track all your questions and build your personal knowledge base on-chain
- 🌐 **Fully Decentralized:** No centralized servers - everything runs on the Internet Computer
- ⚡ **Real-time Responses:** Fast AI inference with immediate answers to your questions
- 🎯 **Adaptive Learning:** Personalized study recommendations based on your learning history
- 📊 **Progress Analytics:** Monitor your learning journey with detailed insights
- 📱 **Modern UI:** Clean, responsive interface built with React and Tailwind CSS

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install/) (Internet Computer development kit)
- [Rust](https://rustup.rs/) (for backend development)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Kaushikj-7/icp-ai-tutor.git
   cd icp-ai-tutor
   ```

2. **Install dependencies:**

   ```bash
   # Install frontend dependencies
   cd src/learnchain_frontend
   npm install
   cd ../..
   ```

3. **Start the local Internet Computer replica:**

   ```bash
   dfx start --background --clean
   ```

4. **Pull and deploy Internet Identity:**

   ```bash
   dfx deps pull
   dfx deps deploy internet_identity
   ```

5. **Deploy the canisters:**

   ```bash
   dfx deploy
   ```

6. **Build frontend:**

   ```bash
   cd src/learnchain_frontend
   npm run build
   cd ../..
   ```

7. **Deploy frontend assets:**

   ```bash
   dfx deploy learnchain_frontend
   ```

8. **Start the development server:**

   ```bash
   cd src/learnchain_frontend
   npm start
   ```

---

## 🏗️ Architecture

LearnChain is built with a modern, decentralized architecture:

### Frontend (React + Vite)

- **React 18** with hooks for state management
- **Tailwind CSS** for responsive, modern styling
- **Vite** for fast development and building
- **Internet Identity** integration for authentication
- **Agent-js** for communication with IC canisters

### Backend (Rust + IC CDK)

- **Rust** with Internet Computer CDK
- **Candid** interface definitions for type-safe communication
- **Stable memory** for persistent data storage
- **Principal-based** user authentication and data isolation

### AI Integration

- Client-side AI inference using modern ML models
- Seamless integration with blockchain storage
- Privacy-preserving question processing

---

## 📁 Project Structure

```
icp-block/
├── dfx.json                 # DFX configuration
├── Cargo.toml              # Rust workspace configuration
├── package.json            # Root package configuration
├── README.md               # This file
├── src/
│   ├── learnchain_backend/ # Rust backend canister
│   │   ├── Cargo.toml
│   │   └── src/
│   │       └── lib.rs      # Main backend logic
│   ├── learnchain_frontend/ # React frontend
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── tailwind.config.js
│   │   └── src/
│   │       ├── App.jsx     # Main App component
│   │       ├── main.jsx    # Entry point
│   │       ├── components/ # Reusable components
│   │       ├── pages/      # Page components
│   │       ├── context/    # React context providers
│   │       ├── hooks/      # Custom React hooks
│   │       └── services/   # API services
│   └── declarations/       # Generated Candid bindings
└── target/                 # Rust build artifacts
```

---

## 🎯 Usage

### Getting Started

1. **Authentication:** Click "Get Started" to authenticate with Internet Identity
2. **Ask Questions:** Navigate to the "Ask" page and type your learning question
3. **Get Answers:** Receive AI-powered explanations tailored to your question
4. **Track Progress:** View your learning history and progress in the dashboard

### Sample Questions

- "What is photosynthesis and how does it work?"
- "Explain quantum computing in simple terms"
- "How do neural networks learn?"
- "What are the principles of organic chemistry?"
- "Solve this math problem: 2x + 5 = 15"

---

## 🛠️ Development

### Local Development Setup

1. **Start local replica:**

   ```bash
   dfx start --background --clean
   ```

2. **Pull Internet Identity dependency:**

   ```bash
   dfx deps pull
   dfx deps deploy internet_identity
   ```

3. **Deploy canisters:**

   ```bash
   dfx deploy
   ```

4. **Generate declarations:**

   ```bash
   dfx generate
   ```

5. **Start frontend:**
   ```bash
   cd src/learnchain_frontend
   npm start
   ```

### Backend Development

The Rust backend is located in `src/learnchain_backend/src/lib.rs`. It provides:

- User authentication and session management
- Question and answer storage
- Learning progress tracking
- Secure data access patterns

### Frontend Development

The React frontend uses modern practices:

- Functional components with hooks
- Context API for state management
- Tailwind CSS for styling
- React Router for navigation

---

## 🔧 Available Scripts

### Root Level

- `npm install` - Install all dependencies
- `dfx start` - Start local IC replica
- `dfx deploy` - Deploy all canisters
- `dfx generate` - Generate Candid bindings

### Frontend (`src/learnchain_frontend/`)

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 🌐 Deployment

### Local Deployment

```bash
dfx deploy --network local
```

### IC Mainnet Deployment

```bash
dfx deploy --network ic --with-cycles 1000000000000
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Rust best practices for backend code
- Use ESLint and Prettier for frontend code formatting
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Internet Computer Protocol** for the decentralized infrastructure
- **DFINITY Foundation** for the development tools and ecosystem
- **React Team** for the amazing frontend framework
- **Rust Community** for the powerful systems programming language
- **Tailwind CSS** for the utility-first CSS framework

---

## 📞 Support

- **GitHub Issues:** [Report bugs or request features](https://github.com/Kaushikj-7/icp-ai-tutor/issues)
- **Community:** Join the Internet Computer developer community
- **Documentation:** Check the [Internet Computer docs](https://internetcomputer.org/docs/)

---

**Built with ❤️ on the Internet Computer**

Ready to revolutionize learning with blockchain technology? Clone LearnChain and start building the future of decentralized education!
