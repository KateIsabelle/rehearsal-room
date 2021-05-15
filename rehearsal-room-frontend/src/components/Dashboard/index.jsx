import { useEffect, useState } from 'react'

// Custom components
import BookingList from './BookingList'
import SpaceList from '../Spaces/SpaceList'
import { Button } from '../Button/Button'
import PopUp from '../Space/PopUp'
import SpaceCreateForm from '../Space/SpaceCreateForm'

// Custom hooks
import useBookingManager from '../../hooks/useBookingManager'

// Material UI Components
import { palette } from '@material-ui/system';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


export default function Dashboard(props) {
  const { user, updateUser } = props;
  const [createSpace, setCreateSpace] = useState(false)
  const [popUp, setPopUp] = useState(false)
  const [popUpContent, setPopUpContent] = useState("")

  // All bookings on the dashboard page are stored in the bookings state.
  // selectedBooking controls which booking is "expanded" currently.
  // bookingHandlers contains four functions: confirm, reject, cancel, and select
  // "select" is fired when you click a booking, and sets it as the new selectedBooking
  // "confirm", "reject", and "cancel" are fired when you click the corresponding button,
  // and will update the database appropriately, and then refresh the bookings list.
  const {
    bookings,
    selectedBooking,
    bookingHandlers
  } = useBookingManager(user.is_host, user.id);

  const [spaces, setSpaces] = useState([])
  useEffect(() => {
    axios.get(`/api/spaces/user/${user.id}`)
      .then(res => setSpaces(res.data))
      .catch(err => console.log(err))
  }, [user.id])


  const makeUserHost = () => {
    axios.put(`/api/users/${user.id}`, {is_host: true})
      .then(res => updateUser(user.email))
      .then(() => setPopUp(true))
  }

  const handleSpaceDelete = () => {

  }

  return (
    <>
    {popUp &&
      <PopUp toggle={() => setPopUp(false)}>
        <h3>Your account is now a Host account!</h3>
        <p class="popup-content">
          You can now list new Spaces and manage incoming booking requests from your dashboard.
        </p>
      </PopUp>
    }
    {createSpace &&
      <SpaceCreateForm
        user={user}
      />}
    {!createSpace &&
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="flex-start"
          align-items="center"
          spacing={2}
        >
          <Grid item xs={3}>
            <Paper >
              {user.first_name} {user.last_name}
              { user.organization_name && <p><strong>Organization: </strong>{user.organization_name}</p>}
              <img src={user.photo} width="90%" alt="profile"/>
              <p>{user.description}</p>
              {!user.is_host &&
              <Button
                onClick={makeUserHost}
                label="Become a Host"
              ></Button>
              }
            </Paper>
          </Grid>

          <Grid
            container
            item
            direction="column"
            justify="flex-start"
            xs={9}
            spacing={2}
          >
            { user.is_host && 
              <>
                <Grid item>
                  <Paper>
                    <h2>My Spaces</h2>
                    <Button
                      onClick={() => setCreateSpace(true)}
                      label="Add a new Space"
                    ></Button>
                    <SpaceList 
                      spaces={spaces}
                      dashboard={true}
                      onDeleteClick={handleSpaceDelete}
                    />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper>
                    <BookingList
                      host={true}
                      bookings={bookings.host}
                      bookingHandlers={bookingHandlers}
                      selectedBooking={selectedBooking}
                      bookingType="pending"
                      title="Pending Booking Requests"
                      emptyMessage="No pending requests!"
                    />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper>
                    <BookingList
                      host={true}
                      bookings={bookings.host}
                      bookingHandlers={bookingHandlers}
                      selectedBooking={selectedBooking}
                      bookingType="confirmed"
                      title="Confirmed Bookings"
                      emptyMessage="No bookings currently confirmed!"
                    />
                  </Paper>
                </Grid>
              </>
            }
            <Grid item>
              <Paper>
                <BookingList
                  host={false}
                  bookings={bookings.artist}
                  bookingHandlers={bookingHandlers}
                  selectedBooking={selectedBooking}
                  bookingType="all"
                  title="My Bookings"
                  emptyMessage="No booking requests!"
                />
              </Paper>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    }
    </>
  )
}



