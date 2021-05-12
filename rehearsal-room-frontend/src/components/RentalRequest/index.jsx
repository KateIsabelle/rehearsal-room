import React from "react";
import { useState } from "react";
import axios from 'axios';


import RequestForm from "./RequestForm"

//user info to match email


//CREATE TABLE bookings(
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
//   space_id INTEGER NOT NULL REFERENCES spaces(id) ON DELETE CASCADE,
//   start_time TIMESTAMP NOT NULL,
//   end_time TIMESTAMP NOT NULL,
//   num_hours INTEGER NOT NULL,
//   status VARCHAR(255) DEFAULT 'pending', --pending,confirmed,rejected
//   usage_description TEXT,
//   special_requests TEXT,
//   used_before BOOLEAN
// );


//needs to match space.id


export default function RentalRequest(props) {
  const [formState, setFormState] = useState({
    usage_descript: "",
    used_before: false
    //set for all
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
      <h1>I am a rental request page compiled</h1>
      <RequestForm 
        formState={formState}
        handleChange={handleChange}
      /> 
    </>
  )
}
