import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { Button as ButtonS } from '../Button/Button';
import AutoComplete from '../AutoComplete'

import axios from 'axios'

//for address input box - PlacesAutocomplete:
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

import Spinner from '../Spinner'
import PopUp from '../Space/PopUp'


// Constants
import { AMENITIES } from '../../constants'


// user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,


export default function SpaceCreateForm(props) {
  const { user } = props
  //previewSource is a base-64 encoded string that represents the image 
  const [previewSource, setPreviewSource] = useState("")
  const [popUp, setPopUp] = useState(false)
  const history = useHistory();

  //Paul's amenities constant
  const amenitiesState = {}
  Object.keys(AMENITIES).forEach(key => {
    amenitiesState[key] = false;
  })

  const [spaceFormState, setSpaceFormState] = useState({
    ...amenitiesState,

    user_id: user.id, //global state
    title: "",
    description: "",
    city: "", 
    address:"", 
    price_per_day: 0,
    price_per_hour: 0,

  })

  const [mapData, setMapData] = useState(
    {
      latitude: 49.2827,
      longitude: -123.1207 //google coords for 'Vancouver'
    }
  )



  const handleChange = event => {
    //console.log(event.target.name)

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
  const routeChange = (space_id) => {
    let path = `/space/${space_id}`; 
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
  //makes post request to backend (updates spaces and maps, and calls cloudinary api)
  const submitInfo = base64EncodedImage => {
    const newSpaceData = {...spaceFormState}
    return axios.post('/api/spaces', {imageData: base64EncodedImage, spaceData: newSpaceData, mapData})
  }
  //on submit, calls uploadImage with previewSource// WHERE DO WE GO, PAUL?!?!?! 
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting")
    setPopUp(true)
    if(!previewSource) return; 
    submitInfo(previewSource)
      .then(res => routeChange(res.data[0].space_id));
  }
  /////////////////////////////////////////////

  ///////////FOR ADDRESS AUTOCOMPLETE///////////////////
  const handleAutocompleteChange = address => {
    setSpaceFormState({...spaceFormState, address});
  };
  //upon address selection, sets address and latitude/longitude in state
  const handleAutocompleteSelect = address => {
    console.log("address: ", address)
    setSpaceFormState({...spaceFormState, address})
    geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => {
      console.log('Success, lat/Lng:', latLng)
      setMapData({latitude: latLng.lat, longitude: latLng.lng})
  })
    .catch(error => console.error('Error', error));
  }
  
  /////////////////////////////////////////////



  return ( 
    <>
      {popUp && 
      <PopUp>
        <p className="popup-content">Saving...</p>
        <Spinner />
      </PopUp>}
      <form>
        <h1>Create A New Space Listing</h1>

        <div className="text-inputs">

        <AutoComplete address={spaceFormState.address} handleChange={handleAutocompleteChange} handleSelect={handleAutocompleteSelect}/>

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


