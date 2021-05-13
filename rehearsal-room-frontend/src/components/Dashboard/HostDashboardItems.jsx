import { useEffect, useState } from 'react';
import axios from 'axios'

// Custom components
import BookingList from './BookingList'

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//AXIOS REQ GOES HERE
const dummyHostBookings = [
  {
    id: 1,
    user_id: 2,
    requester_name: "Plimbus Perkins",
    space_name: "The Big Cahoozey",
    space_id: 1,
    start_time: "05/10/2021 12:00:00",
    end_time: "05/10/2021 2:00:00",
    status: "pending",
    usage_description: "I would like to throw a sick rave party for me and all my cool friends",
    used_before: true,
  },
  {
    id: 2,
    user_id: 2,
    requester_name: "Plimbus Perkins",
    space_name: "The Rat Maze",
    space_id: 1,
    start_time: "05/10/2021 12:00:00",
    end_time: "05/10/2021 2:00:00",
    status: "rejected",
    usage_description: "i'm gonna wreck it",
    used_before: true,
  },
  {
    id: 3,
    user_id: 2,
    requester_name: "Plimbus Perkins",
    space_id: 3,
    space_name: "The Flop Garden",
    start_time: "05/10/2021 12:00:00",
    end_time: "05/10/2021 2:00:00",
    status: "confirmed",
    usage_description: "i'm gonna wreck it",
    used_before: true,
  },
  {
    id: 4,
    user_id: 2,
    requester_name: "Jango Mango",
    space_name: "The Flop Garden",
    space_id: 2,
    start_time: "05/10/2021 12:00:00",
    end_time: "05/10/2021 2:00:00",
    status: "confirmed",
    usage_description: "i'm gonna wreck it",
    used_before: true,
  }
]

export default function HostDashboardItems(props) {
  const { hostId } = props

  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get(`/api/bookings/host/${hostId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err))
  }, [hostId])

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      xs={9}
      spacing={2}
    >
      <Grid item>
        <Paper><h2>My Spaces</h2>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <h2>Pending Booking Requests</h2>
          <BookingList
            bookings={bookings}
            bookingType="pending"
            emptyMessage="No pending requests!"
          />
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <h2>Confirmed Bookings</h2>
          <BookingList
            bookings={bookings}
            bookingType="confirmed"
            emptyMessage="No bookings currently confirmed!"
          />
        </Paper>
      </Grid>
    </Grid>
  )
}