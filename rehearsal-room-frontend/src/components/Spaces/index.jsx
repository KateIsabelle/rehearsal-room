//Spaces is the main page

import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Components
import SpaceList from './SpaceList'
import SearchForm from '../SearchForm'

export default function Spaces() {
  // This list of amenities is used in two places:
  // 1. To help filter the search results by amenity
  // 2. To build the list of toggleable buttons in the SearchForm component
  const amenities = {
    "wifi": "Wifi",
    "sound_proofing": "Sound proofing",
    "sprung_floor": "Sprung floor",
    "kitchenette": "Kitchenette",
    "mirrors": "Mirrors",
    "sound_system": "Sound system",
    "bathroom": "Bathroom",
    "indoor_space": "Indoor space",
    "outdoor_space": "Outdoor space",
    "bike_parking": "Bike parking",
    "street_parking": "Street parking",
    "private_parking": "Private parking",
    "piano": "Piano",
    "natural_light": "Natural light",
    "air_conditioning": "Air conditioning",
    "ten_ft_plus_ceiling": "10 ft plus ceiling",
    "private": "Private",
    "semi_private": "Semi-private",
    "wheelchair_accessible": "Wheelchair-accessible",
    "self_entry": "Self-entry"
  }


  const { city } = useParams();
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);

  //spaces = array of objects
  const [spaces, setSpaces] = useState([])
  const [filteredSpaces, setFilteredSpaces] = useState([])
  const [advancedToggle, setAdvancedToggle] = useState(false)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/spaces/${city}`,
    })
    .then(({ data }) => {
      console.log("get city data: ", data);
      setSpaces(data)
      setFilteredSpaces(data)
    })
    .catch((err) => console.log("get city data ERROR", err));
  }, [city]);

  watch((data, {name, type}) => {
    if (name === "showAdvanced") {
      setAdvancedToggle(data.showAdvanced)
    } else if (type === "change") {
      setFilteredSpaces(filterResults(data))
    }
  })

  const filterResults = (parameters) => {
    // Create regex based on search keyword
    const regex = new RegExp(parameters.keyword, 'i')
    const filtered = spaces.filter(space => {
      if(!space.title.match(regex) && !space.description.match(regex)) {
        // Filter if the title or description don't match what's entered.
        return false;
      }
      for (const key of Object.keys(amenities)) {
        if(parameters[key] === true && space[key] === false) {
          return false
        }
      }
      return true
    })
    console.log(filtered)
    return filtered;
  };

  return (
    <>
      <SearchForm 
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        showAdvanced={advancedToggle}
        amenities={amenities}
      />
      <SpaceList
      spaces={filteredSpaces}
      />
    </>
  )
}