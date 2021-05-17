//adding comment to ensure master reads this file
import React from "react";


export default function RentalSpace (props) {
  return (
    <>
      <div className="rental-space-title-photo">
        <h1>{props.space.title}</h1>
        <h3>Rental Request</h3>
        <br />
        <img className="space-image" src={props.space.cover_photo_url} alt="Space"></img>

        <div className="space-data">
          <p><strong>Address:</strong> {props.space.address}</p>
          <p><strong>Price per hour:</strong> ${props.space.price_per_hour /100}</p>
          <p><strong>Price per day:</strong> ${props.space.price_per_day /100}</p>
        </div>
      </div>
    </>
  )
}