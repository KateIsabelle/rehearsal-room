import React from "react";

const requestButton = () => {
  alert("Request")
}

export default function Space(props) {
  const { title, description, cover_photo_url } = props
  return (

    <article className="">

      <h1>{title}</h1>
      <p>{props.city}, {props.province}, {props.country}</p>
      <img src={cover_photo_url} alt="property" width="600" height="400"></img>
      <p>{description}</p>
      <div>Price per day: ${props.price_per_day / 100}</div>
      <div>Price per hour: ${props.price_per_hour / 100}</div>
      {props.organization_name && <div>Affiliated organization: {props.organization_name}</div>}
      <div>Contact {props.host_name}: {props.host_email}</div>
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

    

        </article>

  )

}