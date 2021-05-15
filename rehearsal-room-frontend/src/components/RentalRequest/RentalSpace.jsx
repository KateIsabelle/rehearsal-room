import React from "react";

export default function RentalSpace (props) {
  const {title, thumbnail_photo_url, street, city, province, price_per_day, price_per_hour} = props;
  console.log(props.space)
  return (
    <>
      <div className="rental-space-title-photo">
        <h1> Rental Request for </h1>
        <h1><strong>{props.space.title}</strong></h1>
        <img className="space-image" src={props.space.cover_photo_url}></img>
      
        <p><strong>Address:</strong> {props.space.street}, {props.space.city}, {props.space.province}.</p>
        <p><strong>Price per hour:</strong> ${props.space.price_per_hour /100}</p>
        <p><strong>Price per day:</strong> ${props.space.price_per_day /100}</p>
      </div>
    </>
  )
}