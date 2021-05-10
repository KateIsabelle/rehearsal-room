import React from "react";
import { Link } from "react-router-dom"

const picStyle = {
  height: "200px",
  width: "200px"
}

export default function SpaceListItem(props) {
  const { spaceId, photoUrl, title } = props
  return (
    <li onClick={() => console.log("you clicked spaceListItem")}>
      <div>{spaceId} <Link to={"/space/" + spaceId}>{title}</Link></div>
      
      <img src={photoUrl} style={picStyle}/>
    </li>
  )
}