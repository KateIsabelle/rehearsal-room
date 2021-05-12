import { useEffect, useState } from 'react';
import axios from 'axios'

// Constants
import { AMENITIES } from '../constants'


/**
 * useFilteredSpaces
 * @param {String} city 
 * 
 * Flow of the hook:
 * 1. Intialize the state for spaces and filteredSpaces
 * 2. Query database for Space data in the input city
 * 3. Save the query results in both spaces and filteredSpaces
 * 4. Initialize the search/filter form using the AMENITIES constant
 * 5. Create the filterResults function, which is called within the handleChange function
 * 6. Return formState, filteredSpaces,and handleFormChange
 * 
 * Usage:
 * 1. Give handleFormChange to the "onChange" attr of search/filter form components
 * 2. Give formState to the "value" or "checked" attr of search/filter form components
 * 3. Use filteredSpaces to render the results of the search
 * 4. When handleFormChange is called, it updates the form state and filters
 *    the master list of spaces based on the new form state
 */
export default function useFilteredSpaces(city) {

  // State handling for the "master" list of Spaces and the filtered list.
  // The filteredSpaces list is what actually gets shown on the page.
  const [spaces, setSpaces] = useState([])
  const [filteredSpaces, setFilteredSpaces] = useState([])

  // Uses the input city to build the list of spaces to work from.
  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/spaces/${city}`,
    })
    .then(({ data }) => {
      console.log("getting city data: ", data);
      setSpaces(data)
      setFilteredSpaces(data)
    })
    .catch((err) => console.log("get city data ERROR", err));
  }, [city]);

  // Creates an object of key/value pairs for each amenity to
  // set the amenity checkboxes to "false" (which means "unchecked").
  // This makes sure that the page isn't *already* filtering any spaces
  // when it loads.
  const amenitiesState = {}
  Object.keys(AMENITIES).forEach(key => {
    amenitiesState[key] = false;
  })
  const [formState, setFormState] = useState({
    keyword: "",
    ...amenitiesState
  })

  const filterResults = (params) => {
    // Create regex based on search keyword
    const regex = new RegExp(params.keyword, 'i')
    const filtered = spaces.filter(space => {
      if(!space.title.match(regex) && !space.description.match(regex)) {
        // Filter if the title or description don't match what's entered.
        return false;
      }
      for (const key of Object.keys(AMENITIES)) {
        if(params[key] === true && space[key] === false) {
          console.log(`filtering ${space.title}: search param is ${key}, search value ${params[key]}, space value ${space[key]}`)
          return false
        }
      }
      return true
    })
    console.log(filtered)
    setFilteredSpaces(filtered);
  };

  // Called when the search inputs (keyword search OR amenity filters) change.
  const handleFormChange = (event) => {
    // Create the new state for the form.
    console.log(event.target, `${event.target.value}`)
    let newValue
    switch (event.target.type) {
      case "text":
        newValue = event.target.value;
        break;
      case "checkbox":
        newValue = event.target.checked;
        break;
      default:
        break;
    }
    const newFormState = {
      ...formState,
      // Set the changed key to either the value (for textbox) or checked status
      // (if it's a checkbox)
      [event.target.name]:  newValue
    }
    setFormState(newFormState)

    // The new form state contains the most recent filter parameters,
    // so filter the results based on that.
    filterResults(newFormState)
  }

  return [
    formState,
    filteredSpaces,
    handleFormChange,
  ]
}