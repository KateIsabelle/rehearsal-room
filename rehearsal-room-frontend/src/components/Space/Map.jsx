import React from "react";


export default function Map(props) {
  const { latitude, longitude } = props
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=500x300&maptype=roadmap&markers=color:blue%7C${latitude},${longitude}&key=${process.env.REACT_APP_MAPS_API_KEY}`

  return (
    <div>
      <img className={props.className} src={url} alt=""/>
    </div>
  )
}
