import mongoose from 'mongoose';
import { Problem as ProblemModel } from '../models/Problem.js';
import { connectDatabase } from '../config/database.js';
import { INITIAL_PROBLEMS } from '../constants.js';

const migrateProblems = async () => {
  try {
    console.log('🔄 Starting problem migration...');
    
    await connectDatabase();

    let created = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (const problem of INITIAL_PROBLEMS) {
      try {
        // Check if problem with this slug already exists
        const existing = await ProblemModel.findOne({ slug: problem.slug });
        
        if (existing) {
          console.log(`⏭️  Skipping "${problem.title}" (already exists)`);
          skipped++;
          continue;
        }

        // Create new problem (without the id field, MongoDB will generate it)
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
        console.log(`✅ Created "${problem.title}"`);
        created++;
      } catch (error: any) {
        const errorMsg = `Failed to migrate "${problem.title}": ${error.message}`;
        console.error(`❌ ${errorMsg}`);
        errors.push(errorMsg);
      }
    }

    console.log('\n📊 Migration Summary:');
    console.log(`   ✅ Created: ${created}`);
    console.log(`   ⏭️  Skipped: ${skipped}`);
    console.log(`   ❌ Errors: ${errors.length}`);
    
    if (errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      errors.forEach(err => console.log(`   - ${err}`));
    }

    if (created > 0) {
      console.log(`\n✅ Successfully migrated ${created} problem(s)!`);
    } else if (skipped === INITIAL_PROBLEMS.length) {
      console.log('\n✅ All problems already exist in the database.');
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

migrateProblems();

