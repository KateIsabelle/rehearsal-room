const express = require('express');
const router = express.Router();

//import configured cloudinary api:
const {cloudinary} = require('../utils/cloudinary')

module.exports = ({
  getSpaces,
  getSpacesByUserId,
  getSpacesByCity,
  getSpacesByKeyword,
  addSpace,
  addMap,
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

  // POST a new space & accompanying map in the db
  router.post('/', (req, res) => {
    //imageData is the base64 encoded string representing image file uploaded
    const { imageData, spaceData, mapData } = req.body
    //upload image to cloudinary
    cloudinary.uploader.upload(imageData, { upload_preset: 'rehearsal_room' })
    .then(res => {
      console.log("cloudinary response**", res)
      //public url where image is saved:
      const url = `https://res.cloudinary.com/davik/image/upload/v${res.version}/${res.public_id}.png`
      //add new space to spaces table
      return addSpace({...spaceData, thumbnail_photo_url: url, cover_photo_url: url} )
    })
    .then(spaceRes => {
      //add accompanying map to maps table
      return addMap({...mapData, space_id: spaceRes[0].id})
    })
    .then(mapRes => res.json(mapRes))
    .catch(err => res.json({error: err.message}));
  })

  // PUT update an existing space
  router.put('/:id', (req, res) => {
    res.json({"PUT req for space id":`${req.params.id}`})
  })

  return router;
}