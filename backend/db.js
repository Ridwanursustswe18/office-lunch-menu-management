const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.HOST,
  port: process.env.DATABASE_PORT, 
  database: process.env.DATABASE_NAME
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};