import React from "react";
import { Link } from "react-router-dom"
import { Button } from '../Button/Button'

const picStyle = {
  height: "400px",
  width: "400px"
}

export default function SpaceListItem(props) {
  const { id, thumbnail_photo_url, title, price_per_hour, dashboard, onDeleteClick } = props
  console.log('SPACE LIST ITEM PROPS:',props)
  return (
    <div className="item" onClick={() => console.log("clicked on space", id, title)}>
       

      <div className="text">
        <h1>{title}</h1>
        <h2>${price_per_hour / 100}/hr</h2>
      </div>
      <Link className="pict" to={"/space/" + id}>
        <div>
          <img src={thumbnail_photo_url} style={picStyle} alt=""/>
          </div>
      </Link>
      {dashboard &&
        <Button 
          label="Unlist This Space"
          backgroundColor="red"
          onClick={() => onDeleteClick(id, title)}
        />
      }
    </div>
  )
}