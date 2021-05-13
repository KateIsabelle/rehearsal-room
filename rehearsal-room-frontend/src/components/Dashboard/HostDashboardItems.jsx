import { useEffect, useState } from 'react';
import axios from 'axios'

// Custom components
import BookingList from './BookingList'

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function HostDashboardItems(props) {
  const { hostId } = props

  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get(`/api/bookings/host/${hostId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err))
  }, [hostId])

  return (
    <>
      <Grid item>
        <Paper><h2>My Spaces</h2>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <h2>Pending Booking Requests</h2>
          <BookingList
            bookings={bookings}
            host={true}
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
            host={true}
            bookingType="confirmed"
            emptyMessage="No bookings currently confirmed!"
          />
        </Paper>
      </Grid>
    </>
  )
}