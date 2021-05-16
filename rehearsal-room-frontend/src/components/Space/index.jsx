import React, { useEffect, useState, Fragment } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'

import Map from './Map'
import RentalRequest from '../RentalRequest/index'
import { Button } from '../Button/Button'
import AmenitiesList from './AmenitiesList'
import OpeningHoursTable from "./OpeningHoursTable";
import PopUp from './PopUp'

export default function Space(props) {
  const { 
    state, 
    mainSpacesReroute,
    dashboardReroute
   } = useSpaceData();
 
  const { space_id } = useParams();

  

  const togglePop = () => {
    setPopUp(false)
   };

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/space/${space_id}`,
    })
    .then(({ data }) => {
      console.log("Data from space page:", data);
      setSpaceData(data[0])
    })
    .catch((err) => console.log("ERROR", err));
  }, [space_id]);

  const dataList = Object.keys(spaceData).map((key, index) => (
    <li key={index}>
      <strong>{key}</strong>: {`${spaceData[key]}`}
    </li>
  ))

  const popUpMsg = `Your request has been sent to ${spaceData.first_name}`

  return (

    <article className="space-container">
    { state.visualMode === "SPACE_SHOW" &&
    <Fragment>
      { state.popUp &&
      <PopUp 
        className="popup"
        header="Request Sent!"
        body={popUpMsg}
        yesButton="Check My Bookings"
        yesButtonFunc={dashboardReroute}
        noButton="Go back to listing"
        noButtonFunc={togglePop}>
      <p className="popup-content">Request Made!</p>
      </PopUp> 
      }
      

      <div className="space-banner">

        <div className="move-down">
          <div>
            <h1 className="mrg-med">{state.spaceData.title}</h1>
            <h3 className="mrg-med">{state.spaceData.city}</h3>
          </div>
          <div className="space-photo-cont">
            <img className="space-photo" src={state.spaceData.cover_photo_url} alt="property"></img>
          </div>
        </div>

        <div className="move-down">

          <div className="price-wrapper">
            <div className="mrg-med"><Button size="xlarge" label="Make a Request" onClick={() => setVisualMode("REQUEST_FORM")}/></div>
            <div className="make-flex-col">
              <div>Price per day: ${state.spaceData.price_per_day / 100}</div>
              <div>Price per hour: ${state.spaceData.price_per_hour / 100}</div>
            </div>
          </div>
          <div className="map-container"><Map className="" latitude={state.spaceData.latitude} longitude={state.spaceData.longitude}/></div>
          {state.spaceData.organization_name && <div>Affiliated organization: {state.spaceData.organization_name}</div>}
          <div>Contact: {state.spaceData.first_name} {state.spaceData.last_name}, {state.spaceData.email}</div>

        </div>

    </div>

    <div className="space-info">
      <div className="space-desc">
        <p>{state.spaceData.description}</p>
      </div>
      <div className="space-features">
        <h3>Features:</h3>
        <AmenitiesList spaceData={state.spaceData}/>
      </div>

      </div>
      <OpeningHoursTable/>
      <div className="browse-button"><Button size="large" label="Go Back to Listings" onClick={mainSpacesReroute}></Button></div>

      <h3>Data from axios request:</h3>
      <ul>
        {dataList}
      </ul>
    </Fragment>
  }
  {visualMode === "REQUEST_FORM" &&
    <RentalRequest user_id={props.user_id} space_id={space_id} space={state.spaceData} setVisualMode={setVisualMode} setPopUp={setPopUp}/>
}

        </article>

  )

}
