import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'

import Map from './Map'

const requestButton = () => {
  alert("Request")
}

export default function Space(props) {
  const [spaceData, setSpaceData] = useState({})
  const { space_id } = useParams();
  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/space/1`,
    })
    .then(({ spaceData }) => {
      console.log("Data from space page:", spaceData);
      setSpaceData(spaceData[0])
    })
    .catch((err) => console.log("ERROR", err));
  }, [space_id]);

  const dataList = Object.keys(spaceData).map(key => (
    <li><strong>{key}</strong>: {`${spaceData[key]}`}</li>
  ))
  return (

    <article className="">

      <h1>{spaceData.title}</h1>
      <p>{spaceData.city}, {spaceData.province}, {spaceData.country}</p>
      <img src={spaceData.cover_photo_url} alt="property" width="600" height="400"></img>
      <p>{spaceData.description}</p>
      <div>Price per day: ${spaceData.price_per_day / 100}</div>
      <div>Price per hour: ${spaceData.price_per_hour / 100}</div>
      {spaceData.organization_name && <div>Affiliated organization: {spaceData.organization_name}</div>}
      <div>Contact: {spaceData.first_name} {spaceData.last_name}, {spaceData.email}</div>
      <button onClick={requestButton}>Make a request</button>

      <table>
        <thead>
          <tr>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          { spaceData.wifi && <tr>
            <td>Wifi</td>
          </tr>}
          { spaceData.sound_proofing && <tr>
            <td>Sound Proof</td>
          </tr>}
          { spaceData.sprung_floor && <tr>
            <td>Spring floor</td>
          </tr>}
          { spaceData.mirrors && <tr>
            <td>Mirrors</td>
          </tr>}
          { spaceData.kitchenette && <tr>
            <td>Kitchenette</td>
          </tr>}
          { spaceData.sound_system && <tr>
            <td>Sound System</td>
          </tr>}
          { spaceData.bathroom && <tr>
            <td>Bathroom</td>
          </tr>}
          { spaceData.indoor_space && <tr>
            <td>Indoor Space</td>
          </tr>}
          { spaceData.outdoor_space && <tr>
            <td>Outdoor Space</td>
          </tr>}
          { spaceData.bike_parking && <tr>
            <td>Bike Parking</td>
          </tr>}
          { spaceData.street_parking && <tr>
            <td>Street Parking</td>
          </tr>}
          { spaceData.private_parking && <tr>
            <td>Private Parking</td>
          </tr>}
          { spaceData.piano && <tr>
            <td>Piano</td>
          </tr>}
          { spaceData.natural_light && <tr>
            <td>Natural Light</td>
          </tr>}
          { spaceData.air_conditioning && <tr>
            <td>Air Conditioning</td>
          </tr>}
          { spaceData.ten_ft_plus_ceiling && <tr>
            <td>High Ceilings (over 10 feet)</td>
          </tr>}
          { spaceData.private && <tr>
            <td>Private</td>
          </tr>}
          { spaceData.semi_private && <tr>
            <td>Semi-private</td>
          </tr>}
          { spaceData.wheelchair_accessible && <tr>
            <td>Wheelchair Accessible</td>
          </tr>}
          </tbody>
    </table>
    <Map latitude={spaceData.latitude} longitude={spaceData.longitude}/>

          <h3>Data from axios request:</h3>
          <ul>
            {dataList}
          </ul>

        </article>

  )

}
