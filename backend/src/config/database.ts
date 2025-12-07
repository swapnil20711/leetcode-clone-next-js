import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-leetcode';

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error: any) {
    console.error('\n❌ MongoDB connection error!');
    console.error(`   Attempted to connect to: ${MONGODB_URI}`);
    
    if (error.message?.includes('ECONNREFUSED')) {
      console.error('\n💡 MongoDB is not running. Please:');
      console.error('   1. Start MongoDB locally:');
      console.error('      - macOS: brew services start mongodb-community');
      console.error('      - Linux: sudo systemctl start mongod');
      console.error('      - Windows: net start MongoDB');
      console.error('\n   2. Or use MongoDB Atlas (cloud):');
      console.error('      - Get connection string from https://www.mongodb.com/cloud/atlas');
      console.error('      - Set MONGODB_URI in your .env file');
      console.error('\n   3. Or install MongoDB:');
      console.error('      - macOS: brew install mongodb-community');
      console.error('      - Visit: https://www.mongodb.com/try/download/community');
    } else {
      console.error(`   Error: ${error.message}`);
    }
    
    process.exit(1);
  }
};

