import React from "react";
import { Link } from "react-router-dom"

const picStyle = {
  height: "400px",
  width: "400px"
}

export default function SpaceListItem(props) {
  const { spaceId, photoUrl, title, description } = props
  return (
    <div className="item" onClick={() => console.log("clicked on space", spaceId, title)}>
      <div>
        <Link to={"/space/" + spaceId}>{title}</Link>
        </div>
      <Link className="pict" to={"/space/" + spaceId}>
        <div>
          <img src={photoUrl} style={picStyle} alt=""/>
          </div>
      </Link>
    </div>
  )
}