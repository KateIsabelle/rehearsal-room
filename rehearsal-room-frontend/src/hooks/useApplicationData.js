import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS,
  SET_BOOKINGS,
  SET_APPLICATION_DATA
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      users: [],
      loading: true,
      bookings: {}
  });

  const setBookings = userId => dispatch( { type: SET_BOOKINGS, userId } )


  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/bookings/2")
    ])
    .then(([usersResponse, bookingsResponse]) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        users: usersResponse.data,
        bookings: bookingsResponse.data
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
      setBookings
  };
};

export default useApplicationData;