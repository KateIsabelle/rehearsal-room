import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS,
  SET_BOOKINGS,
  SET_USER,
  SET_APPLICATION_DATA
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      user: null, //set to id num
      users: [],
      loading: true,
      bookings: []
  });

  const setUserInfo = userEmail => {
    return axios.post(`/api/users/login/${userEmail}`)
    .then(loginStateObj => {
      
      dispatch({
        type:SET_APPLICATION_DATA,
        user: loginStateObj.user,
        bookings: loginStateObj.bookings
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