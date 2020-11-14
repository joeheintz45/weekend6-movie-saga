const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Add query to get all genres
router.get('/:id', (req, res) => {
  const queryText = `SELECT "genres".name FROM "movies"
    JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
    JOIN "genres" ON "genres".id = "movies_genres".genre_id
    WHERE "movies".id=$1;`;
  pool
    .query(queryText, [req.params.id])
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log('movie details could not be gathered', err);
      res.sendStatus(500);
    });
});

module.exports = router;
