// db.js
const mysql = require('mysql2');

// Configura tu conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost',        // tu host, usualmente localhost
  user: 'root',             // tu usuario de MySQL
  password: '123456',// tu contraseña de MySQL
  database: 'vital_fitness_db', // el nombre de tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Exportamos el pool usando Promises para poder usar async/await
module.exports = pool.promise();
