import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Space from '../components/Space/index'
import Map from '../components/Space/Map'


const user1 = 
{
  "id": 1,
  "first_name": "Mabel",
  "last_name": "Golden",
  "organization_name": "The Cultch",
  "email": "mabel.g@thecultch.ca",
  "phone": "16045551234",
  "password": "password",
  "photo": "https://image.shutterstock.com/image-photo/funny-grandmother-portraits-senior-old-260nw-1522642592.jpg",
  "description": "Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. If we're going to have animals around we all have to be concerned about them and take care of them. This is your world. It's cold, but it's beautiful.",
  "is_host": true
  }

const space1 = 
{
  "id": 1,
  "user_id": 1,
  "title": "PL1422",
  "description": "A little happy sunlight shining through there. If I paint something, I don't want to have to explain what it is. Just let this happen. We just let this flow right out of our minds. Just beat the devil out of it. All those little son of a guns. Working it up and down, back and forth.",
  "thumbnail_photo_url": "https://paradigmlife.net/blog/wp-content/uploads/2016/12/shutterstock_762974242-920x425.jpg",
  "cover_photo_url": "https://paradigmlife.net/blog/wp-content/uploads/2016/12/shutterstock_762974242-920x425.jpg",
  "country": "Canada",
  "street": "1422 William St",
  "city": "Vancouver",
  "province": "BC",
  "post_code": "V5L 2P7",
  "price_per_day": 19000,
  "price_per_hour": 4000,
  "wifi": true,
  "sound_proofing": true,
  "sprung_floor": true,
  "kitchenette": true,
  "mirrors": false,
  "sound_system": true,
  "bathroom": true,
  "indoor_space": true,
  "outdoor_space": false,
  "bike_parking": true,
  "street_parking": false,
  "private_parking": true,
  "piano": false,
  "natural_light": false,
  "air_conditioning": true,
  "ten_ft_plus_ceiling": true,
  "private": false,
  "semi_private": true,
  "wheelchair_accessible": true,
  "self_entry": false,
  "active": true
  }
 
  const map1 =  
  {
    id: 1,
    space_id: 1,
    zoom: 13,
    latitude: 49.273790,
    longitude: -123.075260
  }

export const SpaceComponent = () => {
  return <Space 
  key={space1.id}
  {...space1}
  host_name={user1.first_name + " " + user1.last_name}
  host_email={user1.email}
  organization_name={user1.organization_name} 
  latitude={map1.latitude}
  longitude={map1.longitude}
  />
}

export const MapComponent = () =>  
<Map 
latitude={49.273790}
longitude={-123.075260}
/>


export default {
  title: 'Components/Space',
  component: Space,
}