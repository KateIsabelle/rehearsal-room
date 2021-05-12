import { useState } from 'react';

export default function useAmenityToggle() {
  const [advancedState, setAdvancedState] = useState({
    show: false,
    text: "Show amenities filter"
  });

  // Toggle the display and text of the amenities filter based on its current state.
  const toggleAdvanced = (event) => {
    // Prevent default to make sure we don't try to submit a form.
    event.preventDefault();
    let newState = {};
    if (advancedState.show) {
      newState = {
        show: false,
        text: "Show advanced search"
      }
    } else {
      newState = {
        show: true,
        text: "Hide advanced search"
      }
    }
    setAdvancedState(newState);
  }

  return [
    advancedState,
    toggleAdvanced
  ]
}