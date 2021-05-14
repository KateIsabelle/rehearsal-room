const express = require('express');
const { route } = require('.');
const router = express.Router();

const {cloudinary} = require('../utils/cloudinary')


module.exports = ({
  
}) => {
  //POST uploads photo to cloudinary
  router.post('/', (req, res) => {
    const fileStr = req.body.data
    cloudinary.uploader.upload(fileStr, { upload_preset: 'rehearsal_room' })
    .then(res => {
      console.log("cloudinary response**", res)
      console.log("reponse.public_id", res.public_id)
    })
      .catch(err => {
      console.log(err)
      res.status(500).json({err:'Something went wrong***'})
    })
  })

  return router;
}

//route with async/await from tutorial:
// router.post('/', async (req, res) => {
//   try {
//     const fileStr = req.body.data
//     const uploadedResponse = await cloudinary.uploader.upload(fileStr, { upload_preset: 'rehearsal_room' })
//     console.log(uploadedResponse)
//     console.log("public key", uploadedResponse.public_key)
//     res.json({msg: "yay upload"})
//   } catch(err) {
//     console.log(err)
//     res.status(500).json({err:'Something went wrong***'})
//   }
// })


