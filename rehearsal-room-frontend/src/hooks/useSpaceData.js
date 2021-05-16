import { useEffect, useReducer } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import dataReducer, {
  /// what to import
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      popUp: false,
      visualMode: "SPACE_SHOW",
      spaceData: {}
  });

  const history = useHistory();

  const mainSpacesReroute = () =>{ 
    const path = '/spaces/vancouver'; 
    history.push(path);
  }

  const dashboardReroute = () => {
    const path = '/dashboard';
    history.push(path)
  }



  useEffect(() => {

    const scriptTag = document.createElement('script')
    scriptTag.src=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`
    document.body.appendChild(scriptTag)

    // Promise.all([
    //   axios.get("/api/users"),
    // ])
    // .then(([usersResponse]) => {
    //   dispatch({
    //     type: SET_APPLICATION_DATA,
    //     users: usersResponse.data,
    //   })
    // })
  }, []);

  return {
      state,
      mainSpacesReroute,
      dashboardReroute,
      
  };
};

export default useApplicationData;