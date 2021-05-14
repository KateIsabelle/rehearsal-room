const express = require('express');
const { route } = require('.');
const router = express.Router();

const {cloudinary} = require('../utils/cloudinary')


module.exports = ({
  addSpace
}) => {
  //POST uploads photo to cloudinary
  router.post('/', (req, res) => {
    const fileStr = req.body.data
    cloudinary.uploader.upload(fileStr, { upload_preset: 'rehearsal_room' })
    .then(res => {
      console.log("cloudinary response**", res)
      const url = `https://res.cloudinary.com/davik/image/upload/v${res.version}/${res.public_id}.png`
      const spaceData = {
        user_id: 1,
        title: 'The most awesomest',
        description: 'Very awesome place',
        thumbnail_photo_url: url,
        cover_photo_url: url,
        country: 'Canada',
        street: 'Venables',
        city: 'Vancouver',
        province: 'BC',
        post_code: 'BC V5L 2H6',
        price_per_day: 18000,
        price_per_hour: 4000
      }
      addSpace(spaceData)
      .then(booking => res.json(booking))
    })
      .catch(err => {
      console.log(err)
      res.status(500).json({err:'Something went wrong***'})
    })
  })

  return router;
}


