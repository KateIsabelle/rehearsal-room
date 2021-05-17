import React from 'react'
import GoogleMapReact from 'google-map-react'

import './DynamicMap.scss'

const LocationPin = ({ text }) => (
  <div className="pin">
    <i className="fas fa-map-marker-alt"></i>
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => {
  
  return (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
        center={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  )
}

export default Map
