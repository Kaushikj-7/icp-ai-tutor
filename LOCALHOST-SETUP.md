# 🚀 LearnChain - Localhost Setup Guide

## Overview

LearnChain is a decentralized AI tutoring platform built on the Internet Computer Protocol (ICP) with a React frontend and Rust backend canister.

## 📋 Prerequisites

### Required Software

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **DFX** (DFINITY SDK) - [Installation Guide](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent)
- **Rust** (for backend development) - [Install Rust](https://rustup.rs/)
- **Git** for version control

### WSL/Linux Users

If using WSL on Windows, ensure you have:

- WSL2 installed and configured
- Node.js installed in WSL environment
- DFX installed in WSL environment

## 🛠️ Project Structure

```
icp-block/
├── src/
│   ├── learnchain_backend/          # Rust canister
│   │   ├── src/lib.rs              # Main backend logic
│   │   └── Cargo.toml              # Rust dependencies
│   └── learnchain_frontend/         # React frontend
│       ├── src/                    # React components
│       ├── public/                 # Static assets
│       ├── package.json            # Node dependencies
│       └── .env                    # Environment variables
├── dfx.json                        # DFX configuration
├── Cargo.toml                      # Workspace configuration
└── README.md                       # Project documentation
```

## 🔧 Setup Instructions

### 1. Clone and Navigate

```bash
git clone <your-repo-url>
cd icp-block
```

### 2. Backend Setup (Rust)

```bash
# Install Rust dependencies
cargo build

# Start DFX local network (if needed)
dfx start --background --clean
```

### 3. Frontend Setup (React)

```bash
# Navigate to frontend directory
cd src/learnchain_frontend

# Install Node.js dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your API keys
```

### 4. Environment Configuration

Create/update `.env` file in `src/learnchain_frontend/`:

```env
# LearnChain Environment Variables
VITE_GROQ_API_KEY=your_groq_api_key_here
```

## 🚀 Running the Application

### Option 1: Frontend Only (Recommended for Development)

```bash
cd src/learnchain_frontend
npm start
```

- Runs on: `http://localhost:3000`
- Uses mock data for authentication and backend
- AI features work with Groq API

### Option 2: Full Stack with DFX

```bash
# Terminal 1: Start DFX network
dfx start --background

# Terminal 2: Deploy canisters
dfx deploy

# Terminal 3: Start frontend
cd src/learnchain_frontend
npm start
```

## 🧪 Testing Features

### Authentication

- Click "Get Started - Sign In" on homepage
- Uses mock authentication for development
- No real wallet connection required

### AI Question & Answer

1. Navigate to "Ask Question" page
2. Enter any educational question
3. AI responds using Groq API
4. Falls back to mock responses if API fails

### Interactive Tests

1. Go to "Take Test" page
2. Select subject (Math, Physics, Chemistry, CS)
3. Answer multiple choice questions
4. View results and explanations

### Dashboard

- View learning statistics
- See recent questions asked
- Quick access to features

## 🔍 Troubleshooting

### Common Issues

#### 1. DFX Start Fails

```bash
# Clean and restart
dfx stop
dfx start --background --clean
```

#### 2. esbuild Version Conflicts

```bash
cd src/learnchain_frontend
rm -rf node_modules package-lock.json
npm install
```

#### 3. Missing Dependencies

```bash
# Frontend dependencies
cd src/learnchain_frontend
npm install react react-dom react-router-dom groq-sdk

# Backend dependencies
cargo build
```

#### 4. Environment Variables Not Loading

- Ensure `.env` file is in `src/learnchain_frontend/`
- Variables must start with `VITE_` prefix
- Restart development server after changes

#### 5. API Key Issues

- Verify Groq API key is valid
- Check network connectivity
- Mock responses will be used if API fails

### WSL-Specific Issues

```bash
# If node/npm not found in WSL
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# If DFX not found
sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

## 📱 Development Workflow

### Frontend Development

1. Make changes to React components in `src/learnchain_frontend/src/`
2. Hot reload automatically updates browser
3. Use browser DevTools for debugging
4. Test responsive design on different screen sizes

### Backend Development

1. Edit Rust code in `src/learnchain_backend/src/`
2. Run `dfx deploy` to update canisters
3. Use `dfx logs` to view canister logs
4. Test API endpoints with frontend

### Adding New Features

1. Create new React components in appropriate directories
2. Add routes to `App.jsx`
3. Update navigation in `Navbar.jsx`
4. Add corresponding backend methods if needed

## 🔐 Security Notes

- Never commit API keys to git
- Use environment variables for sensitive data
- Mock authentication is for development only
- Implement proper Internet Identity for production

## 📚 Useful Commands

```bash
# Development
npm start                    # Start frontend dev server
dfx start --background      # Start local ICP network
dfx deploy                  # Deploy canisters
dfx stop                    # Stop local network

# Testing
npm test                    # Run frontend tests
cargo test                  # Run backend tests

# Building
npm run build              # Build frontend for production
dfx build                  # Build canisters

# Cleanup
rm -rf node_modules        # Clean frontend deps
cargo clean                # Clean Rust build cache
dfx stop && dfx start --clean  # Reset local network
```

## 🌐 Accessing the Application

- **Frontend**: http://localhost:3000
- **Local ICP Network**: http://127.0.0.1:4943
- **Candid UI**: http://127.0.0.1:4943/?canisterId={canister-id}

## 📖 Documentation Links

- [Internet Computer Docs](https://internetcomputer.org/docs)
- [DFX Reference](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent)
- [React Documentation](https://react.dev/)
- [Groq API Docs](https://console.groq.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🆘 Getting Help

If you encounter issues:

1. Check this troubleshooting guide
2. Review browser console for errors
3. Check terminal output for build errors
4. Verify all dependencies are installed
5. Ensure environment variables are set correctly

---

**Happy Coding! 🎉**
