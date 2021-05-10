import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'

const requestButton = () => {
  alert("Request")
}

export default function Space(props) {
  const [data, setdata] = useState({})
  const { spaceId } = useParams();
  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/space/${spaceId}`,
    })
    .then(({ data }) => {
      console.log(data);
      setdata(data)
    })
    .catch((err) => console.log(err));
  }, [spaceId]);

  const dataList = Object.keys(data).map(key => (
    <li><strong>{key}</strong>: {data[key]}</li>
  ))
  return (

    <article className="">

      <h1>{data.title}</h1>
      <p>{props.city}, {props.province}, {props.country}</p>
      <img src={data.cover_photo_url} alt="property" width="600" height="400"></img>
      <p>{data.description}</p>
      <div>Price per day: ${data.price_per_day / 100}</div>
      <div>Price per hour: ${data.price_per_hour / 100}</div>
      {data.organization_name && <div>Affiliated organization: {data.organization_name}</div>}
      <div>Contact {data.host_name}: {data.host_email}</div>
      <button onClick={requestButton}>Make a request</button>

      <table>
        <tr>
          <th>Features</th>
        </tr>
        { props.wifi && <tr>
          <td>Wifi</td>
        </tr>}
        { props.sound_proofing && <tr>
          <td>Sound Proof</td>
        </tr>}
        { props.sprung_floor && <tr>
          <td>Spring floor</td>
        </tr>}
        { props.mirrors && <tr>
          <td>Mirrors</td>
        </tr>}
        { props.kitchenette && <tr>
          <td>Kitchenette</td>
        </tr>}
        { props.sound_system && <tr>
          <td>Sound System</td>
        </tr>}
        { props.bathroom && <tr>
          <td>Bathroom</td>
        </tr>}
        { props.indoor_space && <tr>
          <td>Indoor Space</td>
        </tr>}
        { props.outdoor_space && <tr>
          <td>Outdoor Space</td>
        </tr>}
        { props.bike_parking && <tr>
          <td>Bike Parking</td>
        </tr>}
        { props.street_parking && <tr>
          <td>Street Parking</td>
        </tr>}
        { props.private_parking && <tr>
          <td>Private Parking</td>
        </tr>}
        { props.piano && <tr>
          <td>Piano</td>
        </tr>}
        { props.natural_light && <tr>
          <td>Natural Light</td>
        </tr>}
        { props.air_conditioning && <tr>
          <td>Air Conditioning</td>
        </tr>}
        { props.ten_ft_plus_ceiling && <tr>
          <td>High Ceilings (over 10 feet)</td>
        </tr>}
        { props.private && <tr>
          <td>Private</td>
        </tr>}
        { props.semi_private && <tr>
          <td>Semi-private</td>
        </tr>}
        { props.wheelchair_accessible && <tr>
          <td>Wheelchair Accessible</td>
        </tr>}
    </table>
          <h3>Data from axios request:</h3>
          <ul>
            {dataList}
          </ul>
        </article>

  )

}