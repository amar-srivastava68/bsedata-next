
import express from 'express';
import db from './db.js';

const router = express.Router();

router.get('/bsedata', (req, res) => {
  db.query('SELECT * FROM bsedata', (error, results) => {
    if (error) {
      console.error('Error querying the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

export default router;
