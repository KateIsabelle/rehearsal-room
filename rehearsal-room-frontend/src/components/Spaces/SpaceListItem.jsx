import React from "react";
import { Link } from "react-router-dom"

const picStyle = {
  height: "400px",
  width: "400px"
}

export default function SpaceListItem(props) {
  const { spaceId, photoUrl, title, price_per_hour } = props
  console.log('SPACE LIST ITEM PROPS:',props)
  return (
    <div className="item" onClick={() => console.log("clicked on space", spaceId, title)}>
       

      <div className="text">
        <h1>{title}</h1>
        <h2>$ 30 /hr{price_per_hour}</h2>
      </div>
      <Link className="pict" to={"/space/" + spaceId}>
        <div>
          <img src={photoUrl} style={picStyle} alt=""/>
          </div>
      </Link>
    </div>
  )
}