import React from "react";

// const map1 =  
//   {
//     id: 1,
//     space_id: 1,
//     zoom: 13,
//     latitude: 49.273790,
//     longitude: -123.075260
//   }

export default function Map(props) {
  const { latitude, longitude } = props
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${latitude},${longitude}&key=${process.env.REACT_APP_MAPS_API_KEY}`

  return (
    <div>
      <img src={url}/>
    </div>
  )
}
