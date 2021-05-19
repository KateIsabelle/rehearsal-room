import React from "react";
import axios from 'axios'

import { useState } from "react";
import { useHistory } from "react-router-dom";

//Material-ui form stylings
import { 
  Input,
  InputAdornment, 
  MenuItem, 
  TextField, 
  Checkbox, 
  FormControlLabel 
} from '@material-ui/core';

//Component
import { Button as ButtonS } from '../Button/Button';
import Spinner from '../Spinner'
import PopUp from '../Space/PopUp'

//Google api
import AutoComplete from '../AutoComplete'

//for address input box - PlacesAutocomplete:
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

// Constants
import { AMENITIES } from '../../constants'


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

  const routeChange = (space_id) => {
    let path = `/space/${space_id}`; 
    history.push(path);
  }

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
  /////////////////////////////////////////

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

  //for drop down selection bar in form
    const cities = [
      { value: "Vancouver", label: "Vancouver" },
      { value: "Toronto", label: "Toronto" },
      { value: "Montreal", label: "Montreal" }
    ];


  return ( 
    <>
      {popUp && 
      <PopUp 
        className="popup"
        header="Saving..."
        body={<Spinner />}
      />}

      <div className="sc-banner">

      </div>
      <div className="sc-move-up">

        <div className="sc-wrapper">
          <h1>Create A New Space Listing</h1>
          <form className="sc-form-content">
            <div className="text-inputs">

              <label htmlFor="title">
                Title for space listing:
              </label>
              <br/>
              <TextField 
                id="outlined-name"
                name='title' 
                value={spaceFormState.title}
                onChange={handleChange} 
                inputProps={{ 'aria-label': 'description' }} 
                required helperText="required field"
                variant="outlined"
              />
              <br/>

              <label htmlFor="description">
                Details to describe the space (Hint: this would be a good place to add a couple guidelines):
              </label>
              <br/>
              <TextField 
                name='description'
                id="outlined-basic" 
                variant="outlined"
                multiline
                rows={2}
                rowsMax={Infinity}
                value={spaceFormState.description}
                onChange={handleChange}
              />
              <br/> 

              <h2 className="sc-category-titles">Photos</h2>
              <br />
              <label htmlFor="image">
                Upload pictures:
              </label> 
              <br/>
              <div className="sc-upload-preview-set">
                {previewSource && <img 
                                  src={previewSource} 
                                  alt="" 
                                  style={{
                                    height: 'auto', 
                                    width: '200px'
                                    }}/>}
                <input 
                  name="image" 
                  type="file"
                  onChange={handleFileInputChange}
                />
              </div>
              <br/>

              <h2 className="sc-category-titles">Address of listing</h2>
              <br />
              <label htmlFor="address">
                Space address:
              </label>
              <AutoComplete 
                className="autocomplete"
                address={spaceFormState.address} 
                handleChange={handleAutocompleteChange} 
                handleSelect={handleAutocompleteSelect}
              />
              <br />

              <label htmlFor="city">
                City of listing:
              </label>
              <br/>
              <TextField
                select 
                id="outlined-name"
                name='city' 
                label='Select'
                value={spaceFormState.city}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'description' }} 
                helperText="Please select general area of listing"
                variant="outlined"
              >
              {cities.map(option => (
                <MenuItem
                  key={option.value} 
                  value={option.value}>
                  {option.label}
                </MenuItem>
                ))
              }
              </TextField>
              <br />
              
              <h2 className="sc-category-titles">Rates</h2>
              <br />
              <p>Rehearsal Room was built in the spirit of sharing resources. If you have an unused or extra space avaiable, consider listing it for free. Consider this a contribution to the cultivation of local Arts and Culture! We encourage conversations for alternative forms of payment (eg. workexchange, goods, services, etc.)</p>
              <br />

              <label htmlFor="price_per_hour">
                Hourly Rate: 
              </label>
              <Input
                name="price_per_hour"
                id="standard-adornment-amount"
                value={spaceFormState.price_per_hour}
                onChange={handleChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
              <br />

              <label htmlFor="price_per_day">
                Daily Rate: 
              </label>
              <Input
                name="price_per_day"
                id="standard-adornment-amount"
                value={spaceFormState.price_per_day}
                onChange={handleChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
              <br />

            </div>
            <br/>
            <h2>Amenities</h2>
            <br />
            <p>Does your space include any of the following? Check if yes:</p>
            <br />
            {<ul className="sc-ammenities-list">{amenitiesList}</ul>}
            <br/>
            <div className="sc-submit">
              <ButtonS  size="bar" primary={true} label="Submit" onClick={handleSubmit} /> 
            </div>
          </form>
        </div>
     </div> 
    </>
 
  );
}


