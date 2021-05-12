import { useEffect, useState } from 'react';

// Material UI Components
import { palette } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Avatar';

//AXIOS REQ GOES HERE
const dummyBookings = [
  {
    id: 1,
    user_id: 2,
    requester_name: "Plimbus Perkins",
    space_name: "The Big Cahoozey",
    space_id: 1,
    start_time: "05/10/2021 12:00:00",
    end_time: "05/10/2021 2:00:00",
    status: "pending",
    usage_description: "i'm gonna wreck it",
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

export default function Dashboard(props) {
  const { user } = props;
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    setBookings(dummyBookings)
  })

  return (
    <Container maxWidth="lg">
      <Grid 
        container
        direction="row"
        justify="flex-start"
        align-items="center"
        spacing={2}
      >
        <Grid item xs={3}>
          <Paper bgcolor={palette.main} color="primary.contrastText">{user.first_name} {user.last_name}
            <img src={user.photo} width="90%" alt="profile"/>
            <p>{user.description}</p>
            <p><strong>{user.organization_name}</strong></p>
          </Paper>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          xs={9}
          spacing={2}>
          <Grid item>
            <Paper>My Spaces
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              Pending Booking Requests
              <BookingList 
                bookings={bookings}
                bookingType="pending"
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              Confirmed Bookings
              <BookingList
                bookings={bookings}
                bookingType="confirmed"
              />
            </Paper>
          </Grid>
        </Grid>


      </Grid>
    </Container>
  )
}

function BookingList(props) {
  const { bookings, bookingType } = props;

  const bookingList =
    bookings
    .filter(booking => booking.status === bookingType)
    .map(booking => (
      <BookingListItem {...booking} />
    ))
  return (
    <ul>
      {bookingList}
    </ul>
  )
}

function BookingListItem(props) {
  return (
    <li>
      <p><strong>Requester:</strong>{props.requester_name}</p> |
    For: {props.space_name} |
    Start time: {props.start_time} |
    End time: {props.end_time}</li>
  )
}