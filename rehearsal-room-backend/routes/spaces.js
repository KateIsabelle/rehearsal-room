const express = require('express');
const router = express.Router();

module.exports = ({
  getSpaces,
  getSpacesByUserId,
  getSpacesByCity,
  getSpacesByKeyword,
  addSpace
}) => {
  // GET spaces
  router.get('/', (req, res) => {
    getSpaces()
      .then(spaces => res.json(spaces))
      .catch(err => res.json({error: err.message}));
  });

  // GET spaces for a specific user
  router.get('/user/:userId', (req, res) => {
    const userId = req.params.userId
    getSpacesByUserId(userId)
      .then(spaces => res.json(spaces))
      .catch(err => res.json({error: err.message}));
  })

  // GET spaces for a specific city
  router.get('/:city', (req, res) => {
    const city = req.params.city
    getSpacesByCity(city)
      .then(spaces => res.json(spaces))
      .catch(err => res.json({error: err.message}));
  });

  // POST a new space in the db
  router.post('/', (req, res) => {
    const { spaceData } = req.body
    addSpace(spaceData)
      .then(space => res.json(space))
      .catch(err => res.json({error: err.message}));
  })

  // PUT update an existing space
  router.put('/:id', (req, res) => {
    res.json({"PUT req for space id":`${req.params.id}`})
  })

  return router;
}