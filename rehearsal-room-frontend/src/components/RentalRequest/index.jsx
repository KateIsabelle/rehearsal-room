import React from "react";
import { useState } from "react";
import axios from 'axios';


import RequestForm from "./RequestForm";
import RentalSpace from "./RentalSpace"

//user(renter) info to match email form input


//CREATE TABLE bookings(
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
//   space_id INTEGER NOT NULL REFERENCES spaces(id) ON DELETE CASCADE,
//   start_time TIMESTAMP NOT NULL,
//   end_time TIMESTAMP NOT NULL,
//   num_hours INTEGER NOT NULL, *** helper function to minus military end_time from start_time!!!
//   status VARCHAR(255) DEFAULT 'pending', --pending,confirmed,rejected
//   usage_description TEXT,
//   special_requests TEXT,
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
    usage_descript: "",
    email:"",
    date: new Date(),
    start_time: "10:30:00",
    end_time: "21:30:00",
    used_before: false,
    multi_day_rental: false,
    alternative_payment: false
  })
  const handleChange = event => {
    console.log(event.target.name)
    setFormState( prev => ( {
      ...prev,
      [event.target.name]:event.target.value || event.target.checked
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
      /> 
    </>
  )
}
