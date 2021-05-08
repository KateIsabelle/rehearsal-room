const express = require('express');
const router = express.Router();

module.exports = ({
  getSpaces,
  getSpacesByCity
}) => {
  // GET spaces
  router.get('/', (req, res) => {
    getSpaces()
      .then(spaces => res.json(spaces))
      .catch(err => res.json({error: err.message}));
  });

  // GET spaces for a specific city
  router.get('/:city', (req, res) => {
    const city = req.params.city
    getSpacesByCity(city)
      .then(spaces => res.json(spaces))
      .catch(err => res.json({error: err.message}));
  });
  return router;
}