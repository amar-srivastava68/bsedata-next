// src/db.js
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: '64.227.174.65',
  user: 'root',
  password: '123456',
  database: 'bse',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

export default connection;
