import React from "react";
import { useState } from "react";
import axios from 'axios';


import RequestForm from "./RequestForm";
import RentalSpace from "./RentalSpace";

//user(renter) info to match email form input


//CREATE TABLE bookings(
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
//   space_id INTEGER NOT NULL REFERENCES spaces(id) ON DELETE CASCADE,
//   start_time TIMESTAMP NOT NULL,
//   end_time TIMESTAMP NOT NULL,
//   status VARCHAR(255) DEFAULT 'pending', --pending,confirmed,rejected
//   usage_description TEXT,
//   used_before BOOLEAN
// );


//needs to match space.id

//where do you come from, where do you go? (onSubmit) axioooos??

const space = {
  id: 9,
  user_id: 4,
  title: "Capoeira Ache Brazil Academy",
  description: "description",
  thumbnail_photo_url: "https://cdn-prod.thisopenspace.com/photos/files/000/041/727/small/20170901_135729.jpg?1516992233",
  cover_photo_url: "https://cdn-prod.thisopenspace.com/photos/files/000/041/721/banner/20170709_151933.jpg?1516991647",
  country: "Canada",
  street: "341 E Broadway",
  city: "Vancouver",
  province: "BC",
  post_code: "V5T1W5",
  price_per_day: 25000,
  price_per_hour: 3500
  }


export default function RentalRequest(props) {
  const [formState, setFormState] = useState({
    user_id: props.user_id,
    space_id: props.space_id,
    usage_descript: "",
    date: new Date(),
    start_time: "10:30:00",
    end_time: "21:30:00",
    used_before: false,
    multi_day_rental: false,
    alternative_payment: false
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

    setFormState( prev => ( {
      ...prev,
      [event.target.name]:newValue
    }))
    }
  return (
    <>
      <RentalSpace 
      space={space}
      />
      <RequestForm 
        formState={formState}
        handleChange={handleChange}
        setVisualMode={props.setVisualMode}
      />
    </>
  )
}
