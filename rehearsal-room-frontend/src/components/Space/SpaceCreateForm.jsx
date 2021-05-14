import React from "react";
import { TextField, Checkbox } from '@material-ui/core';
import { Button as ButtonS } from '../Button/Button'



// user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,


export default function SpaceCreateForm(props) {
  //  const { formState, handleChange } = props;

  //  const handleSubmit = () => {
  //   const bookingData = {...formState}
  //   axios.post('/api/bookings', { bookingData })
  //   props.setVisualMode("SPACE_SHOW")
  //   props.setPopUp(true)
  //  }

  return ( 
    <>
      <form>
        <h1>Create A New Space Listing</h1>

        <label for="title">
          Title for space listing:
        </label>
        <TextField name="title" id="keyword" name="keyword" variant="outlined" />

        <label for="description">
          Details to describe the space (Hint: this would be a good place to add a couple guidelines):
        </label>
            <TextField name="description" id="outlined-basic" style={{ width: "500px" }} variant="outlined" />
        

        <h2>Photos</h2>

        <label for="thumbnail_photo_url">
          Input url link for main listing page thumbnail photo:
        </label>
        <TextField name="thumbnail_photo_url" id="keyword" name="keyword" variant="outlined" />

        <label for="cover_photo_url">
          Input url link for space specific cover photo photo:
        </label>
        <TextField name="cover_photo_url" id="keyword" name="keyword" variant="outlined" />


        <h2>Address of listing</h2>

        <label for="street">
          Street number:
        </label>
        <TextField name="street" id="keyword" name="keyword" variant="outlined" />

        <label for="city">
          City:
        </label>
        <TextField name="city" id="keyword" name="keyword" variant="outlined" />

        <label for="province">
          Province:
        </label>
        <TextField name="province" id="keyword" name="keyword" variant="outlined" />

        <label for="postal_code">
          Postal Code:
        </label>
        <TextField name="postal_code" id="keyword" name="keyword" variant="outlined" />
        
        <label for="country">
          Country:
        </label>
        <TextField name="country" id="keyword" name="keyword" variant="outlined" />

        
        <h2>Rates</h2>
        <p>Rehearsal Room was built in the spirit of sharing resources. If you have an unused or extra space avaiable, consider listing it for free. Consider this a contribution to the cultivation of local Arts and Culture! We encourage conversations for alternative forms of payment (eg. workexchange, goods, services, etc.)</p>

        <label for="price_per_hour">
          Hourly Rate: 
        </label>
        <TextField name="price_per_hour" id="keyword" name="keyword" variant="outlined" />

        <label for="price_per_day">
          Daily Rate: 
        </label>
        <TextField name="price_per_day" id="keyword" name="keyword" variant="outlined" />

        
      <h2>Amenities</h2>

      <p>Does your space include any of the following? Check if yes:</p>

      <label for="wifi"> Wifi? </label>
        <Checkbox
          name="wifi"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        
        <label for="sound_proofing"> Soundproofing? </label>
        <Checkbox
          name="sound_proofing"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="sprung_floor"> Sprung Floor? </label>
        <Checkbox
          name="sprung_floor"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="kitchenette"> Kitchenette? </label>
        <Checkbox
          name="kitchenette"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="mirrors"> Mirrors? </label>
        <Checkbox
          name="mirrors"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="sound_system"> Sound System? </label>
        <Checkbox
          name="sound_system"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="bathroom"> Bathroom? </label>
        <Checkbox
          name="bathroom"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="indoor_space"> Indoor Space? </label>
        <Checkbox
          name="indoor_space"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="outdoor_space"> Outdoor Space? </label>
        <Checkbox
          name="outdoor_space"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="bike_parking"> Bike Parking? </label>
        <Checkbox
          name="bike_parking"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="street_parking"> Street Parking? </label>
        <Checkbox
          name="street_parking"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="private_parking"> Private Parking? </label>
        <Checkbox
          name="private_parking"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="piano"> Piano? </label>
        <Checkbox
          name="piano"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="natural_light"> Natural Light? </label>
        <Checkbox
          name="natural_light"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="air_conditioning"> Air Conditioning? </label>
        <Checkbox
          name="air_conditioning"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="ten_ft_plus_ceiling"> 10 ft plus ceiling? </label>
        <Checkbox
          name="ten_ft_plus_ceiling"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="private"> Complete privacy? </label>
        <Checkbox
          name="private"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="semi_private"> Limited Privacy? </label>
        <Checkbox
          name="semi_private"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="wheelchair_accessible"> Wheelchair Accessible? </label>
        <Checkbox
          name="wheelchair_accessible"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <label for="self_entry"> Self-Entry? </label>
        <Checkbox
          name="self_entry"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <ButtonS primary label="Submit" />
      
      </form>
    </>
 
  );
}


