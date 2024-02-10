const mysql = require('mysql2');
// require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "202051056",
  database: 'aero_master'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection;