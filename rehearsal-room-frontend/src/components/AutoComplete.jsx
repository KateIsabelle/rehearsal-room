import React, { useState } from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

export default function AutoComplete(props) {
  // const [ address, setAddress ] = useState("")

  // const handleChange = address => {
  //   setAddress(address);
  // };

  // const handleSelect = address => {
  //   console.log("address: ", address)
  //   // setAddress(address)
  //   geocodeByAddress(address)
  //   .then(results => getLatLng(results[0]))
  //   .then(latLng => {
  //     console.log('Success, lat/Lng:', latLng)
  // })
  //   .catch(error => console.error('Error', error));
  // }

  return (
    <div>
      <PlacesAutocomplete
      key="autocomplete-address"
      value={props.address}
      onChange={props.handleChange}
      onSelect={props.handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div className="input-suggestion"
                  {...getSuggestionItemProps(suggestion, {
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
    </div>
  )
}