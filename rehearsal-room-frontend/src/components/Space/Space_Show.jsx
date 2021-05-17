import React, { Fragment } from "react";

import Map1 from './Map'
import { Button } from '../Button/Button'
import AmenitiesList from './AmenitiesList'
import OpeningHoursTable from "./OpeningHoursTable";
import PopUp from './PopUp'
// import { Map } from './DynamicMap'


export default function Space_Show(props) {
  
  const popUpMsg = `Your request for ${props.spaceData.title} has been sent to ${props.spaceData.first_name} ${props.spaceData.organization_name ? `from ${props.spaceData.organization_name}` : ""}`
  
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

return (  
    <Fragment>
      { props.popUp &&
        <PopUp 
          className="popup"
          header="Request Sent!"
          body={popUpMsg}
          yesButton="Check My Bookings"
          yesButtonFunc={props.yesButtonFunc}
          noButton="Go back to listing"
          noButtonFunc={props.noButtonFunc}
          >
        <p className="popup-content">Request Made!</p>
        </PopUp> 
      }

      <div className="space-banner">
        <div className="move-down">
          <div>
            <h1 className="mrg-med">{props.spaceData.title}</h1>
            <h3 className="mrg-med">{props.spaceData.city}</h3>
          </div>
          <div className="space-photo-cont">
            <img className="space-photo" src={props.spaceData.cover_photo_url} alt="property"></img>
          </div>
        </div>

        <div className="move-down">
          <div className="price-wrapper">
            <div className="mrg-med"><Button size="xlarge" label="Make a Request" onClick={() => props.setVisualMode("REQUEST_FORM")}/></div>
            <div className="make-flex-col">
              <div>Price per day: ${props.spaceData.price_per_day / 100}</div>
              <div>Price per hour: ${props.spaceData.price_per_hour / 100}</div>
            </div>
          </div>
          { false && <div className="map-container"><Map1 className="" latitude={props.spaceData.latitude} longitude={props.spaceData.longitude}/></div> }
         
          { props.spaceData.organization_name && <div>Affiliated organization: {props.spaceData.organization_name}</div> }
          <div>Contact: {props.spaceData.first_name} {props.spaceData.last_name}, {props.spaceData.email}</div>
        </div>
      </div>

      <div className="space-info">
        <div className="space-desc">
          <p>{props.spaceData.description}</p>
        </div>
        <div className="space-features">
          <h3>Features:</h3>
          <AmenitiesList spaceData={props.spaceData}/>
        </div>
      </div>

      <OpeningHoursTable/>

      <div className="browse-button"><Button size="large" label="Go Back to Listings" onClick={()=> props.reroute('/spaces/vancouver')}></Button></div>
    
    </Fragment>
)
}
