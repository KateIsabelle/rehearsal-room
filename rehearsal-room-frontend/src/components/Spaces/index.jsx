//Spaces is the main page

import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import useAmenityToggle from '../../hooks/useAmenityToggle'

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
  // Create an object of key/value pairs for each amenity to 
  // set their initial state to "false" (or "unchecked")
  const amenitiesState = {}
  Object.keys(amenities).forEach(key => {
    amenitiesState[key] = false;
  })

  const { city } = useParams();

  //spaces = array of objects
  const [spaces, setSpaces] = useState([])
  const [filteredSpaces, setFilteredSpaces] = useState([])
  const [advancedState, toggleAdvanced] = useAmenityToggle()

  const [formState, setFormState] = useState({
    keyword: "",
    ...amenitiesState
  })

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    const newState = {
      ...formState,
      [event.target.name]: event.target.value || event.target.checked
    }
    console.log(newState.keyword)
    setFormState(newState)
    setFilteredSpaces(filterResults(newState))
  }

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

  const filterResults = (params) => {
    // Create regex based on search keyword
    const regex = new RegExp(params.keyword, 'i')
    const filtered = spaces.filter(space => {
      if(!space.title.match(regex) && !space.description.match(regex)) {
        // Filter if the title or description don't match what's entered.
        return false;
      }
      for (const key of Object.keys(amenities)) {
        if(params[key] === true && space[key] === false) {
          console.log(`filtering ${space.title}: search param is ${key}, search value ${params[key]}, space value ${space[key]}`)
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
        onChange={handleChange}
        onAdvancedClick={toggleAdvanced}
        advancedState={advancedState}
        formState={formState}
        amenities={amenities}
      />
      <SpaceList
      spaces={filteredSpaces}
      />
    </>
  )
}