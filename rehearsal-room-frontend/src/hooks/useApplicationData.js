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
      bookings: []
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
    Promise.all([
      axios.get("/api/users"),
      // axios.get(`/api/bookings/${2}`)
    ])
    .then(([usersResponse]) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        users: usersResponse.data,
        // bookings: bookingsResponse.data
      })
    })
          // axios({
          //         method: 'GET',
          //         url: '/api/users',
          //     })
          // .then(({
          //     data
          // }) => {
          //     console.log(data);
          //     dispatch({
          //         type: SET_USERS,
          //         users: data
          //     });
          // })
          // .catch((err) => console.log(err));
  }, []);

  return {
      state,
      dispatch,
      setUserInfo
  };
};

export default useApplicationData;