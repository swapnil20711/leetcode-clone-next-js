import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import { Problem as ProblemModel } from '../models/Problem.js';
import { connectDatabase } from '../config/database.js';
import { INITIAL_PROBLEMS } from '../constants.js';

const setup = async () => {
  try {
    console.log('🚀 Starting database setup...\n');
    
    await connectDatabase();

    // 1. Seed Admin User
    console.log('📝 Step 1: Seeding admin user...');
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@leetcode.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const adminName = process.env.ADMIN_NAME || 'Admin User';

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log('   ⏭️  Admin user already exists\n');
    } else {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      const admin = new User({
        email: adminEmail,
        password: hashedPassword,
        name: adminName,
        role: 'admin',
      });
      await admin.save();
      console.log('   ✅ Admin user created successfully!');
      console.log(`      Email: ${adminEmail}`);
      console.log(`      Password: ${adminPassword}\n`);
    }

    // 2. Migrate Problems
    console.log('📚 Step 2: Migrating problems...');
    let created = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (const problem of INITIAL_PROBLEMS) {
      try {
        const existing = await ProblemModel.findOne({ slug: problem.slug });
        
        if (existing) {
          skipped++;
          continue;
        }

        const newProblem = new ProblemModel({
          slug: problem.slug,
          title: problem.title,
          difficulty: problem.difficulty,
          description: problem.description,
          examples: problem.examples,
          constraints: problem.constraints,
          starterCode: problem.starterCode,
          testCases: problem.testCases,
        });

        await newProblem.save();
        created++;
      } catch (error: any) {
        errors.push(`Failed to migrate "${problem.title}": ${error.message}`);
      }
    }

    console.log(`   ✅ Created: ${created}`);
    console.log(`   ⏭️  Skipped: ${skipped}`);
    if (errors.length > 0) {
      console.log(`   ❌ Errors: ${errors.length}`);
    }

    console.log('\n✅ Database setup completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
};

setup();

