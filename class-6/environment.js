const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();  // Load .env variables

const app = express();
const PORT = process.env.PORT || 3000;  // Use env or default

// Database config from environment variables
const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// Simple GET route to fetch users
app.get('/users', async (req, res) => {
  let connection;
  try {
    // Create connection using env vars
    connection = await mysql.createConnection(DB_CONFIG);
    
    // Execute query (prepared statement with ? for safety)
    const [rows] = await connection.execute('SELECT * FROM users');
    
    // Send JSON response
    res.json({ users: rows });
    
    console.log('Query successful:', rows.length, 'users found');
  } catch (error) {
    console.error('Database error:', error.message);
    res.status(500).json({ error: 'Failed to fetch users' });
  } finally {
    // Always close connection
    if (connection) {
      await connection.end();
    }
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
