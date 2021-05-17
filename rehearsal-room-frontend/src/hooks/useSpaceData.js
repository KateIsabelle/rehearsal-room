import { useEffect, useReducer } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import dataReducer, {
  SET_POPUP,
  SET_SPACE_VISUAL_MODE,
  SET_SPACE_DATA,
  SET_MAP_LOADED
} from '../reducer/data_reducer';

const useSpaceData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      popUp: false,
      visualMode: "SPACE_SHOW",
      spaceData: {},
      mapLoaded: false
  });
  //toggles the small request confirmation popup between visible and not visible
  const togglePopUp = bool => {
    dispatch({
      type:SET_POPUP,
      popUp: bool
    })
   }
  //changes the visual mode of Space component -- currently just between viewing space and request form
  const setVisualMode = mode => {
    dispatch({
      type: SET_SPACE_VISUAL_MODE,
      visualMode: mode
    })
  }
  
  const history = useHistory();
  //used on buttons to link a new path
  const reroute = path =>{ 
    history.push(path);
  }
  //grabs space_id from /space/:space_id
  const { space_id } = useParams();

  useEffect(() => {
    //gets necessary data for this space & sets spaceData in state
    axios({
      method: 'GET',
      url: `/api/space/${space_id}`,
    })
    .then(({ data }) => {
      console.log("Data from space page:", data);
      dispatch({
        type: SET_SPACE_DATA,
        spaceData: data[0]
      })
    })
    .catch((err) => console.log("ERROR", err));
  }, [space_id]);

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&callback=initMap` //https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places
    scriptTag.addEventListener('load', () => dispatch( { type: SET_MAP_LOADED, mapLoaded: true } )) 
    document.body.appendChild(scriptTag)
  }, [])

  useEffect(() => {
    if(!state.mapLoaded) return
  }, [state.mapLoaded])

  return {
      state,
      togglePopUp,
      setVisualMode, 
      reroute
  };
};

export default useSpaceData;