//adding comment to ensure master reads this file
import React from "react";


export default function RentalSpace (props) {
  console.log(props.space)
  return (
    <>
      <div className="rental-space-title-photo">
        <h3><strong>{props.space.title}</strong></h3>
        <h3>Rental Request</h3>
        <br />
        <img className="space-image" src={props.space.cover_photo_url}></img>
      
        <div className="space-data">
          <p><strong>Address:</strong> {props.space.address}</p>
          <p><strong>Price per hour:</strong> ${props.space.price_per_hour /100}</p>
          <p><strong>Price per day:</strong> ${props.space.price_per_day /100}</p>
        </div>
      </div>
    </>
  )
}