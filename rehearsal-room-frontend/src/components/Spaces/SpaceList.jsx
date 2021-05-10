import React, { Fragment }from "react";
import SpaceListItem from './SpaceListItem'


export default function SpaceList(props) {
  //spaces = array of objects
  const { spaces } = props

  const spaceL = spaces.map(s => 
    <SpaceListItem 
    key={s.id}
    spaceId={s.id}
    photoUrl={s.thumbnail_photo_url}
    />
    )
    console.log("SPACE LIST--", spaceL)

  return (
    <ul>
    {spaceL}
    </ul>
  )
}