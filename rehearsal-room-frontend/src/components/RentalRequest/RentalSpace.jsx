import React from "react";

export default function RentalSpace (props) {
  const {title, thumbnail_photo_url, street, city, province, price_per_day, price_per_hour} = props;
  console.log(props.space.city)
  return (
    <>
    <h1> Rental Request for {props.space.title} </h1>
    <img src={props.space.thumbnail_photo_url}></img>
    <p>Address: {props.space.street}, {props.space.city}, {props.space.province}.</p>
    <p>Price per hour: ${props.space.price_per_hour /100}</p>
    <p>Price per day: ${props.space.price_per_day /100}</p>
    </>
  )
}