import React from "react";


export default function SpaceListItem(props) {
  const { spaceId, photoUrl } = props
  return (
    <li onClick={console.log("you clicked spaceListItem")}>
    <div>{spaceId}</div>
    <div>{photoUrl}</div>
    </li>
  )
}