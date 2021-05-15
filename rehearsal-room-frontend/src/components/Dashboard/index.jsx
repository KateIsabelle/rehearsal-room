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
import axios from 'axios';


export default function Dashboard(props) {
  const { user, updateUser } = props;
  const [createSpace, setCreateSpace] = useState(false)
  const [popUp, setPopUp] = useState(false)
  const [popUpContent, setPopUpContent] = useState({
    header: "",
    body: "",
    yesButton: "Yes",
    yesButtonFunc: "",
    noButton: "No",
    noButtonFunc: () => {setPopUp(false)},
  })

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
      .then(() => setPopUpContent ({
        header: "Your account is now a Host account!",
        body: "You can now list new Spaces and manage incoming booking requests from your dashboard.",
        yesButton: "Great!",
        yesButtonFunc: () => setPopUp(false),
        noButton: "",
        noButtonFunc: () => null,
      }
      ))
      .then(() => setPopUp(true))
  }

  const handleSpaceDelete = (id, space_title) => {
    setPopUpContent ({
      header: "Are You Sure?",
      body: `Unlisting ${space_title} will remove all bookings and data about it.`,
      yesButton: "Yes, unlist it",
      yesButtonFunc: () => deleteSpace(id, space_title),
      noButton: "No, go back",
      noButtonFunc: () => setPopUp(false),
    }
    )
    setPopUp(true)
  }

  const deleteSpace = (id, space_title) => {
    axios.delete(`/api/spaces/${id}`)
    .then(res => {
      const newPopUp = {
        header: "Space Unlisted",
        body: `${res.data.title} has been successfully unlisted.`,
        yesButton: "Close",
        yesButtonFunc: () => setPopUp(false),
        noButton: "",
        noButtonFunc: () => setPopUp(false),
      }
      setPopUpContent (newPopUp)
    })
    .then(() => axios.get(`/api/spaces/user/${user.id}`))
    .then(res => setSpaces(res.data))
  }

  return (
    <>
    {popUp &&
      <PopUp toggle={() => setPopUp(false)}>
        <h3>{popUpContent.header}</h3>
        <p class="popup-content">
          {popUpContent.body}
        </p>
        {popUpContent.yesButton && 
          <Button 
            label={popUpContent.yesButton}
            onClick={popUpContent.yesButtonFunc}
          />}
        {popUpContent.noButton && 
          <Button 
            label={popUpContent.noButton}
            onClick={popUpContent.noButtonFunc}
          />}
      </PopUp>
    }
    {createSpace &&
      <SpaceCreateForm
        user={user}
      />}
    {!createSpace &&
      <Container className="dashboard-container" maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="flex-start"
          align-items="center"
          spacing={2}
        >
          <Grid item xs={3}>
            <div className="dashboard-card dashboard-profile">
              <h2>{user.first_name} {user.last_name}</h2>
              { user.organization_name && <h3>Organization: {user.organization_name}</h3>}
              <img src={user.photo} width="90%" alt="profile"/>
              <p>{user.description}</p>
              {!user.is_host &&
              <Button
                onClick={makeUserHost}
                label="Become a Host"
              ></Button>
              }
            </div>
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
                  <div className="dashboard-card">
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
                  </div>
                </Grid>
                <Grid item>
                  <div className="dashboard-card">
                    <BookingList
                      host={true}
                      bookings={bookings.host}
                      bookingHandlers={bookingHandlers}
                      selectedBooking={selectedBooking}
                      bookingType="pending"
                      title="Pending Booking Requests"
                      emptyMessage="No pending requests!"
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div className="dashboard-card">
                    <BookingList
                      host={true}
                      bookings={bookings.host}
                      bookingHandlers={bookingHandlers}
                      selectedBooking={selectedBooking}
                      bookingType="confirmed"
                      title="Confirmed Bookings"
                      emptyMessage="No bookings currently confirmed!"
                    />
                  </div>
                </Grid>
              </>
            }
            <Grid item>
              <div className="dashboard-card">
                <BookingList
                  host={false}
                  bookings={bookings.artist}
                  bookingHandlers={bookingHandlers}
                  selectedBooking={selectedBooking}
                  bookingType="all"
                  title="My Bookings"
                  emptyMessage="No booking requests!"
                />
              </div>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    }
    </>
  )
}



