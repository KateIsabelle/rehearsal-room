import React from 'react';
import { Link } from 'react-router-dom';
// import './_CityList.scss'

export default function CityList() {
  return (
    <>
      <div className="container">
        <h1>Pick an area to explore </h1>
        <div className="city-list">
          <Link to="/spaces/vancouver" style={{textDecoration: 'none'}}className="city-item">Vancouver</Link>
          <Link to="/spaces/vancouver" style={{textDecoration: 'none'}}className="city-item">Toronto</Link>
          <Link to="/spaces/vancouver" style={{textDecoration: 'none'}}className="city-item">Montreal</Link>
        </div>
      </div>
    </>
  )
}


