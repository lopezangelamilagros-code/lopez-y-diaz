// back/models/db.js
const mysql = require('mysql2');
const util = require('util');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '123456',
  database: process.env.MYSQL_DB_NAME || 'vital_fitness_db'
});

pool.query = util.promisify(pool.query);

module.exports = pool;
