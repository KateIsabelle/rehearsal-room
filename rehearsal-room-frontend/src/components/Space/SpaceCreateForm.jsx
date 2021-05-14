import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { Button as ButtonS } from '../Button/Button';

import axios from 'axios'



import './_SpaceCreateForm.scss';

// Constants
import { AMENITIES } from '../../constants'


// user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,


export default function SpaceCreateForm(props) {
  //previewSource is a base-64 encoded string that represents the image 
  const [previewSource, setPreviewSource] = useState("")

  //Paul's amenities constant
  const amenitiesState = {}
  Object.keys(AMENITIES).forEach(key => {
    amenitiesState[key] = false;
  })

  const [spaceFormState, setSpaceFormState] = useState({
    user_id: 4, //needs to be prop drilled based on where it is called

    title: "",
    description: "",

    country:"", 
    street:"", 
    city: "", 
    province: "", 
    post_code: "",

    price_per_day: 0,
    price_per_hour: 0,

    ...amenitiesState
  })

  const [mapData, setMapData] = useState(
    {
      latitude: 49.276700,
      longitude: -123.066109
    }
  )



  const handleChange = event => {
    console.log(event.target.name)

    let newValue
    switch (event.target.type) {
      case "checkbox":
        newValue = event.target.checked;
        break;
      default:
        newValue = event.target.value;
        break;
    }

    setSpaceFormState( prev => ( {
      ...prev,
      [event.target.name]:newValue
    }))
    }

    const amenitiesList = Object.keys(AMENITIES).map(key => {
      return(
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    name={key}
                    checked={spaceFormState[key]}
                    onChange={handleChange}
                  />}
                label={AMENITIES[key] + "?"}
              />
            );
      })

    //Intent: path == /space/:[new space id generated]
    const history = useHistory();
    const routeChange = () =>{ 
    let path = `/space/`; 
    history.push(path);
  }

  //  const handleSubmit = () => {
  //   const newSpaceData = {...spaceFormState}
  //   axios.post('/api/spaces', { newSpaceData })

  //   props.setVisualMode("SPACE_SHOW")
  //   routeChange();
  //  }


  ////////FOR PHOTO UPLOAD///////////
   //sets previewSource when file chosen
   const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }
  //calls previewFile with file chosen
  const handleFileInputChange = e => {
    const file = e.target.files[0] // just takes one file
    previewFile(file)
  }
  //makes post request to backend, updates spaces and maps
  const uploadImage = base64EncodedImage => {
    console.log("Base64:", base64EncodedImage)
    const newSpaceData = {...spaceFormState}
    axios.post('/api/spaces', {imageData: base64EncodedImage, spaceData: newSpaceData, mapData})
  }
  //on submit, calls uploadImage with previewSource// WHERE DO WE GO, PAUL?!?!?! 
  const handleSubmit = e => {
    console.log("submitting")
    e.preventDefault();
    if(!previewSource) return; 
    uploadImage(previewSource);
  }



  return ( 
    <>
      <form>
        <h1>Create A New Space Listing</h1>

        <div className="text-inputs">
          <label for="title">
            Title for space listing:
          </label>
          <input 
            name='title' 
            value={spaceFormState.title}
            onChange={handleChange} 
          />

          <label for="description">
            Details to describe the space (Hint: this would be a good place to add a couple guidelines):
          </label>
            <input 
            name='description'
            value={spaceFormState.description}
            onChange={handleChange} 
          />
            

          <h2>Photos</h2>

          <label for="image">
            Upload pictures:
          </label>  
          <input 
            name="image" 
            type="file"
            onChange={handleFileInputChange}
          />
          {previewSource && <img src={previewSource} alt="" style={{height: '100px', width: '100px'}}/>}


          <h2>Address of listing</h2>

          <label for="street">
            Street number:
          </label>
          <input 
            name="street"
            value={spaceFormState.street}
            onChange={handleChange} 
          />

          <label for="city">
            City:
          </label>
          <input 
            value={spaceFormState.city}
            onChange={handleChange}
            name="city" 
          />

          <label for="province">
            Province:
          </label>
          <input 
            name="province"
            value={spaceFormState.province}
            onChange={handleChange}
          />

          <label for="post_code">
            Postal Code:
          </label>
          <input 
            name="post_code" 
            value={spaceFormState.post_code}
            onChange={handleChange}
          />
          
          <label for="country">
            Country:
          </label>
          <input 
            name="country"
            value={spaceFormState.country}
            onChange={handleChange}
          />

          
          <h2>Rates</h2>
          <p>Rehearsal Room was built in the spirit of sharing resources. If you have an unused or extra space avaiable, consider listing it for free. Consider this a contribution to the cultivation of local Arts and Culture! We encourage conversations for alternative forms of payment (eg. workexchange, goods, services, etc.)</p>

          <label for="price_per_hour">
            Hourly Rate: 
          </label>
          <input 
            name="price_per_hour" 
            value={spaceFormState.price_per_hour}
            onChange={handleChange}
          />

          <label for="price_per_day">
            Daily Rate: 
          </label>
          <input 
            name="price_per_day" 
            value={spaceFormState.price_per_day}
            onChange={handleChange} 
          />
        </div>
        
        <h2>Amenities</h2>

        <p>Does your space include any of the following? Check if yes:</p>

        {<ul>{amenitiesList}</ul>}

        <ButtonS primary label="Submit" onClick={handleSubmit} /> 
      
      </form>
      
    </>
 
  );
}


