import React, { useEffect, useState, Fragment } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'

import Map from './Map'
import RentalRequest from '../RentalRequest/index'
import { Button } from '../Button/Button'
import AmenitiesList from './AmenitiesList'
import OpeningHoursTable from "./OpeningHoursTable";
import PopUp from './PopUp'


const requestButton = () => {
  alert("Request")
}

export default function Space(props) {
  const [spaceData, setSpaceData] = useState({})
  const [popUp, setPopUp] = useState(false)
  const [visualMode, setVisualMode] = useState("SPACE_SHOW")
  const { space_id } = useParams();

  const history = useHistory();

  const routeChange = () =>{ 
    let path = '/spaces/vancouver'; 
    history.push(path);
  }

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
  return (

    <article className="space-container">
    { visualMode === "SPACE_SHOW" &&
    <Fragment>
    { popUp &&
      <PopUp toggle={togglePop}>
      <p className="popup-content">Request Made!</p>
      </PopUp> }
      

      <div className="space-banner">

        <div className="move-down">
          <div>
            <h1 className="mrg-med">{spaceData.title}</h1>
            <h3 className="mrg-med">{spaceData.city}</h3>
          </div>
          <div className="space-photo-cont">
            <img className="space-photo" src={spaceData.cover_photo_url} alt="property"></img>
          </div>
        </div>

        <div className="move-down">

          <div className="price-wrapper">
            <div className="mrg-med"><Button size="xlarge" label="Make a Request" onClick={() => setVisualMode("REQUEST_FORM")}/></div>
            <div className="make-flex-col">
              <div>Price per day: ${spaceData.price_per_day / 100}</div>
              <div>Price per hour: ${spaceData.price_per_hour / 100}</div>
            </div>
          </div>
          <div className="map-container"><Map className="" latitude={spaceData.latitude} longitude={spaceData.longitude}/></div>
          {spaceData.organization_name && <div>Affiliated organization: {spaceData.organization_name}</div>}
          <div>Contact: {spaceData.first_name} {spaceData.last_name}, {spaceData.email}</div>

        </div>

    </div>

    <div className="space-info">
      <div className="space-desc">
        <p>{spaceData.description}</p>
      </div>
      <div className="space-features">
        <h3>Features:</h3>
        <AmenitiesList spaceData={spaceData}/>
      </div>

      </div>
      <OpeningHoursTable/>
      <div className="browse-button"><Button size="large" label="Go Back to Listings" onClick={routeChange}></Button></div>

          
    </Fragment>
  }
  {visualMode === "REQUEST_FORM" &&
    <RentalRequest user_id={props.user_id} space_id={space_id} space={spaceData} setVisualMode={setVisualMode} setPopUp={setPopUp}/>
}

        </article>

  )

}
