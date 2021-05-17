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
      .catch(err => console.error(err))
  }, [user.id])


  const makeUserHost = () => {
    axios.put(`/api/users/${user.id}`, {is_host: true})
      .then(res => updateUser(user.email))
      .then(() => setPopUpContent ({
        header: "Your account is now a Host account!",
        body: "You can now list new Spaces and manage incoming booking requests from your dashboard.",
        yesButton: "Great!",
        yesButtonMode: "secondary",
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
      yesButtonMode: "danger",
      yesButtonFunc: () => deleteSpace(id, space_title),
      noButton: "No, go back",
      noButtonMode: "secondary",
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
      <PopUp 
        className="popup"
        header={popUpContent.header}
        body={popUpContent.body}
        yesButton={popUpContent.yesButton}
        yesButtonFunc={popUpContent.yesButtonFunc}
        noButton={popUpContent.noButton}
        noButtonFunc={popUpContent.noButtonFunc}
      />
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

                    <h2 className="booking-list-header">My Spaces <Button
                      onClick={() => setCreateSpace(true)}
                      label="List a new Space"
                    ></Button></h2>
                    <SpaceList 
                      spaces={spaces}
                      dashboard={true}
                      contentWhenEmpty={(
                        <div className="booking-list-item-empty">You don't have any Spaces! <strong>List</strong> a new one with the "List a new Space" button!</div>
                      )}
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
                      contentWhenEmpty="No pending requests!"
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
                      contentWhenEmpty="No bookings currently confirmed!"
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
                  contentWhenEmpty="You don't have any outgoing booking requests!"
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



