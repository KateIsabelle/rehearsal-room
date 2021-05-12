import React from "react";

import AmenitiesListItem from './AmenitiesListItem'
import { AMENITIES } from '../../constants'


export default function FeaturesList(props) {
  const { spaceData } = props

  const list = Object.keys(AMENITIES).filter(amenity => spaceData[amenity]).map((feature, index) =>
    <AmenitiesListItem 
    key={index}
    feature={AMENITIES[feature]}
  />)
  return (
    <ul>
      {list}
    </ul>
  )
}
