import React, { useEffect, useState, Fragment } from "react";
import { useParams, Link } from 'react-router-dom';
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

    <article className="">
  { visualMode === "SPACE_SHOW" &&
    <Fragment>
      { popUp && <PopUp toggle={togglePop}/> }
      <h1>{spaceData.title}</h1>
      <p>{spaceData.city}, {spaceData.province}, {spaceData.country}</p>
      <img src={spaceData.cover_photo_url} alt="property" width="600" height="400"></img>
      <p>{spaceData.description}</p>
      <div>Price per day: ${spaceData.price_per_day / 100}</div>
      <div>Price per hour: ${spaceData.price_per_hour / 100}</div>
      {spaceData.organization_name && <div>Affiliated organization: {spaceData.organization_name}</div>}
      <div>Contact: {spaceData.first_name} {spaceData.last_name}, {spaceData.email}</div>
      <Button size="small" label="Make a Request" onClick={() => setVisualMode("REQUEST_FORM")}/>

      <h3>Features:</h3>
      <AmenitiesList spaceData={spaceData}/>
      <OpeningHoursTable/>

      <Map latitude={spaceData.latitude} longitude={spaceData.longitude}/>

          <h3>Data from axios request:</h3>
          <ul>
            {dataList}
          </ul>
    </Fragment>
  }
  {visualMode === "REQUEST_FORM" &&
    <RentalRequest user_id={props.user_id} space_id={space_id} setVisualMode={setVisualMode} setPopUp={setPopUp}/>
}

        </article>

  )

}
