const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.DB_DATABASE || 'imc',
});

module.exports = connection;