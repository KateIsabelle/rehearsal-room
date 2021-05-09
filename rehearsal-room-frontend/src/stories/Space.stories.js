import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Space from '../components/Space/index'

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

export const SpaceComponent = () => {
  return <Space 
  key={space1.id}
  {...space1}
  />
}


export default {
  title: 'Components/Space',
  component: Space,
}