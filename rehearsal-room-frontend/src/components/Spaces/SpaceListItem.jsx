import React from "react";
import { Link } from "react-router-dom"

const picStyle = {
  height: "200px",
  width: "200px"
}

export default function SpaceListItem(props) {
  const { spaceId, photoUrl, title, description } = props
  return (
    <li onClick={() => console.log("clicked on space", spaceId, title)}>
      <div>{spaceId} <Link to={"/space/" + spaceId}>{title}</Link></div>
      <img src={photoUrl} style={picStyle} alt=""/>
      <p>{description}</p>
    </li>
  )
}