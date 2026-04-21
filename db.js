const knex = require('knex');
const fs = require('fs');
const path = require('path');

// Load config
const configPath = path.join(__dirname, 'config.json');
let config;

try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (err) {
  console.error('Failed to load config.json:', err.message);
  process.exit(1);
}

const db = knex(config.database);

async function initDb() {
  try {
    const hasTable = await db.schema.hasTable('user');
    if (!hasTable) {
      console.log('Creating user table...');
      await db.schema.createTable('user', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('phone');
        table.string('address');
        table.timestamps(true, true); // adds created_at and updated_at
        table.index(['email']); // Index on email
      });
      console.log('user table created successfully.');
    } else {
      console.log('api: user table already exists.');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

module.exports = { db, initDb };