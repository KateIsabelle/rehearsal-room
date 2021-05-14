const express = require('express');
const { route } = require('.');
const router = express.Router();


module.exports = ({
  
}) => {
  // GET space by id
  // router.get('/:space_id', (req, res) => {
  //   const spaceId = req.params.space_id
  //   getSpaceById(spaceId)
  //     .then(space => res.json(space))
  //     .catch(err => res.json({error: err.message}));
  // });

  router.post('/', (req, res) => {
    
  })

  return router;
}