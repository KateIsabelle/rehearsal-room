import React from "react";

const picStyle = {
  height: "200px",
  width: "200px"
}

export default function SpaceListItem(props) {
  const { spaceId, photoUrl } = props
  return (
    <li onClick={console.log("you clicked spaceListItem")}>
    <div>{spaceId}</div>
    <img src={photoUrl} style={picStyle}/>
    </li>
  )
}