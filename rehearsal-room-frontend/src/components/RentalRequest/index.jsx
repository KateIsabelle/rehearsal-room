//adding comment to ensure master reads this file
import React from "react";
import { useState } from "react";

//Components
import RequestForm from "./RequestForm";
import RentalSpace from "./RentalSpace";

export default function RentalRequest(props) {
  const [formState, setFormState] = useState({
    user_id: props.user_id, 
    space_id: props.space_id,
    usage_description: "",
    date: "2021-05-20",
    start_time: "10:30",
    end_time: "21:30",
    used_before: false,
    multi_day_rental: false,
    alternative_payment: false
  })

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

    setFormState( prev => ( {
      ...prev,
      [event.target.name]:newValue
    }))
    }


  return (
    <>
      <div className="rental-request-container">
        <RentalSpace 
        space={props.space}
        />

        <RequestForm 
          formState={formState}
          handleChange={handleChange}
          setVisualMode={props.setVisualMode}
          setPopUp={props.setPopUp}
        />
      </div>
    </>
  )
}
