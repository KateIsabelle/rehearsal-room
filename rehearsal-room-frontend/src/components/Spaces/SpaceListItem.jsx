import React from "react";
import { Link } from "react-router-dom"
import { Button } from '../Button/Button'

// const picStyle = {
//   height: "300px",
//   width: "400px"
// }

export default function SpaceListItem(props) {
  const { id, thumbnail_photo_url, title, price_per_hour, dashboard, onDeleteClick } = props
  return (
    <div className="sl-wrapper">
      <div className="sl-item">
        <div className="sl-title">
          <p>{title}</p>
        </div>
        <Link className="sl-pict" to={"/space/" + id}>
          <div>
            <img src={thumbnail_photo_url} className={props.photo_size_class} alt=""/>
            </div>
        </Link>
      </div>
      <div className="sl-pricebox">
        <h2 className="sl-price">${price_per_hour / 100}/hr</h2>
      </div>
      {dashboard &&
          <Button 
            label="Unlist"
            danger="true"
            onClick={() => onDeleteClick(id, title)}
          />
        }
    </div>
  )
}