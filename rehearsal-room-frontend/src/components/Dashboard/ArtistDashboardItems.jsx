import { useEffect, useState } from 'react';
import axios from 'axios'

// Custom components
import BookingList from './BookingList'

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function ArtistDashboardItems(props) {
  const { artistId } = props

  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get(`/api/bookings/${artistId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err))
  }, [artistId])

  return (
    <Grid item>
      <Paper>
        <h2>My Bookings</h2>
        <BookingList
          bookings={bookings}
          userType="artist"
          bookingType="all"
          emptyMessage="No booking requests!"
        />
      </Paper>
    </Grid>
  )
}