require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('✅ API Node.js is running!');
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('❌ Erreur requête PostgreSQL :', error.message);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});



app.listen(port, () => {
  console.log(`🚀 Backend app listening on port ${port}`);
});
console.log('Connexion à PostgreSQL :');
console.log('Host:', process.env.PGHOST);
console.log('User:', process.env.PGUSER);
console.log('Password:', process.env.PGPASSWORD);
console.log('Database:', process.env.PGDATABASE);
console.log('Port:', process.env.PGPORT);

