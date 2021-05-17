import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS,
  SET_BOOKINGS,
  SET_USER_INFO,
  SET_APPLICATION_DATA
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      user: null, //set to user obj
      users: [],
      loading: true,
      bookings: [],
      hostBookings: []
  });

  const setUserInfo = userEmail => {
    console.log("In setUserInfo function...")
    return axios.post(`/api/users/login/${userEmail}`)
    .then(loginStateObj => {
      dispatch({
        type:SET_USER_INFO,
        user: loginStateObj.data.user,
        bookings: loginStateObj.data.bookings,
        hostBookings: loginStateObj.data.hostBookings
      })
   
    })
    
  }


  useEffect(() => {

    // const scriptTag = document.createElement('script')
    // scriptTag.src=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`
    // document.body.appendChild(scriptTag)

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
      dispatch,
      setUserInfo
  };
};

export default useApplicationData;