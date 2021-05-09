const express = require('express');
const router = express.Router();

module.exports = ({
  getSpaces,
  getSpacesByCity,
  getSpacesByKeyword,
  addSpace
}) => {
  // GET spaces
  router.get('/', (req, res) => {
    const { keyword } = req.query
    getSpacesByKeyword(keyword)
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

  // PUT a new space in the db
  router.post('/', (req, res) => {
    const { spaceData } = req.body
    addSpace(spaceData)
      .then(space => res.json(space))
      .catch(err => res.json({error: err.message}));
  })

  return router;
}