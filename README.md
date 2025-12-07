# AI LeetCode Clone - Fullstack Application

A comprehensive coding platform clone where users can browse algorithmic problems, solve them in multiple languages (C++, Java, JavaScript, Python) with an AI-powered code judge, and create their own custom challenges.

## Features

- **User Authentication**: Sign up and login with role-based access (User/Admin)
- **Problem Management**: Admins can add problems, users can solve them
- **MongoDB Storage**: All data (users, problems, submissions) stored in MongoDB
- **Submission History**: All past submissions are saved and can be viewed
- **AI-Powered Judge**: Uses Google Gemini AI to evaluate code submissions
- **Multi-language Support**: Write solutions in JavaScript, Python, Java, or C++

## Project Structure

```
ai-leetcode-clone/
├── backend/              # Express.js API Server
│   ├── src/
│   │   ├── server.ts     # Express server entry point
│   │   ├── services/     # Business logic
│   │   │   ├── problems.ts
│   │   │   └── geminiService.ts
│   │   ├── types.ts      # TypeScript types
│   │   └── constants.ts  # Initial problem data
│   ├── package.json
│   └── tsconfig.json
├── frontend/             # Next.js Frontend
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── context/          # React Context
│   ├── types.ts          # TypeScript types
│   ├── constants.ts      # Constants
│   ├── package.json
│   └── tsconfig.json
└── package.json          # Root package.json for workspace scripts
```


## Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB (local or MongoDB Atlas)
- Gemini API Key (get one from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

   Or install separately:
   ```bash
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. **Set up MongoDB:**
   
   You have two options:
   
   **Option A: Local MongoDB**
   - Install MongoDB: https://www.mongodb.com/try/download/community
   - Start MongoDB:
     - macOS: `brew services start mongodb-community` (if installed via Homebrew)
     - Linux: `sudo systemctl start mongod`
     - Windows: `net start MongoDB`
   - Default connection: `mongodb://localhost:27017/ai-leetcode`
   
   **Option B: MongoDB Atlas (Cloud - Recommended for beginners)**
   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create a free cluster
   - Get your connection string from Atlas dashboard
   - Use it in your `.env` file (see step 3)

3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```
   This installs `dotenv` and other required packages.

4. **Set up environment variables:**

   **Backend** - Create `backend/.env` file (in the backend directory, not root):
   ```env
   MONGODB_URI=mongodb://localhost:27017/ai-leetcode
   JWT_SECRET=your-secret-key-change-in-production
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5001
   ADMIN_EMAIL=admin@leetcode.com
   ADMIN_PASSWORD=admin123
   ADMIN_NAME=Admin User
   ```
   
   **Important:** Make sure the `.env` file is in the `backend/` directory, not the root directory!

   **Frontend** - Create `frontend/.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5001
   ```

5. **Setup Database (Recommended):**
   ```bash
   cd backend
   npm run setup
   ```
   
   This runs both admin user seeding and problem migration in one command. It will:
   - Create an admin user (if it doesn't exist)
   - Migrate all initial problems from constants to MongoDB
   - Skip any duplicates

   **Or run separately:**
   
   **Seed Admin User:**
   ```bash
   npm run seed:admin
   ```
   
   **Migrate Problems:**
   ```bash
   npm run migrate:problems
   ```

## Running the Application

### Development Mode (Both Frontend and Backend)

Run both servers concurrently:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5001`
- Frontend server on `http://localhost:3000`

### Run Separately

**Backend only:**
```bash
npm run dev:backend
# or
cd backend && npm run dev
```

**Frontend only:**
```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```

## Building for Production

```bash
npm run build
```

This builds both backend and frontend.

## API Endpoints

The backend API runs on `http://localhost:5001`:

### Authentication

### POST `/api/auth/signup`
Create a new user account
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}
```

### POST `/api/auth/login`
Login and get JWT token
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Problems

### GET `/api/problems`
Fetch all problems (public)

### GET `/api/problems/:slug`
Fetch a specific problem by slug (public)

### POST `/api/problems`
Create a new problem (Admin only - requires JWT token)
```json
{
  "slug": "string",
  "title": "string",
  "difficulty": "Easy" | "Medium" | "Hard",
  "description": "string",
  "examples": [...],
  "constraints": [...],
  "starterCode": {...},
  "testCases": [...]
}
```

### Submissions

### POST `/api/judge`
Judge code submission (requires authentication)
```json
{
  "problemId": "string",
  "code": "string",
  "language": "javascript" | "python" | "java" | "cpp"
}
```

### GET `/api/submissions/me`
Get current user's submissions (requires authentication)

### GET `/api/submissions/problem/:problemId`
Get submissions for a specific problem (requires authentication)

## Tech Stack

**Backend:**
- Express.js
- TypeScript
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Google Gemini AI

**Frontend:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Prism.js (syntax highlighting)
- React Context for state management

## User Roles

- **User**: Can browse problems, solve them, and view their submission history
- **Admin**: Can do everything a user can do, plus add new problems

## Notes

- All data is stored in MongoDB (users, problems, submissions)
- The AI judge service requires a valid Gemini API key
- JWT tokens are used for authentication (expires in 7 days)
- Default admin credentials: admin@leetcode.com / admin123 (change in production!)
- Backend and frontend are completely separated and can be deployed independently

## License

MIT
