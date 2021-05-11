import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS,
  SET_BOOKINGS
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      users: [],
      loading: true,
      bookings: {}
  });

  const setBookings = bookings => dispatch( {type: SET_BOOKINGS, bookings } )

  useEffect(() => {
    Promise.all([
      axios.get("api/users")
    ])
    .then(([users]) => {
      console.log("USERS.DATA", users.data);
      dispatch({
        type: SET_USERS,
        users: users.data
      })
    })
          // Promise.all([
          //   axios.get("/api/days"),
          //   axios.get("/api/appointments"),
          //   axios.get("/api/interviewers")
          // ])
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
          .catch((err) => console.log(err));
  }, []);

  return {
      state,
      dispatch,
  };
};

export default useApplicationData;