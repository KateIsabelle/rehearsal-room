const express = require('express');
const router = express.Router();

module.exports = ({
  getSpaces
}) => {
  // GET spaces
  router.get('/', (req, res) => {
    getSpaces()
      .then(spaces => res.json(spaces))
      .catch(err => res.json({error: err.message}));
  });

  return router;
}