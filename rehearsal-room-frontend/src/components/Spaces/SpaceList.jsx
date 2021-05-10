import React, { Fragment, useState, useEffect }from "react";
import { useParams } from 'react-router-dom'
import SpaceListItem from './SpaceListItem'
import axios from 'axios'


export default function SpaceList(props) {
  //spaces = array of objects
  const { city } = useParams();
  const [spaces, setSpaces] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/spaces/${city}`,
    })
    .then(({ data }) => {
      console.log(data);
      setSpaces(data)
    })
    .catch((err) => console.log(err));
  }, [city]);

  const spaceL = spaces.map(s => 
    <SpaceListItem 
      key={s.id}
      spaceId={s.id}
      title={s.title}
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