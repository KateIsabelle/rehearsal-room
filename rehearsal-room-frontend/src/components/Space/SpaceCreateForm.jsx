import React from "react";
import { useState } from "react";
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import { Button as ButtonS } from '../Button/Button';


import './_SpaceCreateForm.scss';

// Constants
import { AMENITIES } from '../../constants'


// user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,


export default function SpaceCreateForm(props) {

  const { 
    formState,
    onChange,
  } = props;

  const amenitiesState = {}
  Object.keys(AMENITIES).forEach(key => {
    amenitiesState[key] = false;
  })

  const [spaceFormState, setSpaceFormState] = useState({
    user_id: 4, //global state

    title: "",
    description: "",
    thumbnail_photo_url: "",
    cover_photo_url: "", 

    country:"", 
    street:"", 
    city: "", 
    province: "", 
    post_code: "",

    price_per_day: 0,
    price_per_hour: 0,

    ...amenitiesState
  })

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

  //  const handleSubmit = () => {
  //   const newSpaceData = {...spaceFormState}
  //   axios.post('/api/spaces', { newSpaceData })
  //   props.setVisualMode("SPACE_SHOW")
  //   props.setPopUp(true)
  //  }

  const amenitiesList = Object.keys(AMENITIES).map(key => {
    return(
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  name={key}
                />}
              label={AMENITIES[key] + "?"}
            />
          );
        })

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

          <label for="thumbnail_photo_url">
            Input url link for main listing page thumbnail photo:
          </label>
          <input 
            name="thumbnail_photo_url" 
            value={spaceFormState.thumbnail_photo_url}
            onChange={handleChange}
          />

          <label for="cover_photo_url">
            Input url link for space specific cover photo photo:
          </label>
          <input 
            name="cover_photo_url" 
            value={spaceFormState.cover_photo_url}
            onChange={handleChange}
          />


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

        <ButtonS primary label="Submit" />
      
      </form>
    </>
 
  );
}


