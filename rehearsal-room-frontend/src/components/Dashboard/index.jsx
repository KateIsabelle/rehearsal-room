// Custom components
import BookingList from './BookingList'

// Material UI Components
import { palette } from '@material-ui/system';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export default function Dashboard(props) {
  const { user } = props;

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
          <Paper >
            {user.first_name} {user.last_name}
            { user.organization_name && <p><strong>Organization: </strong>{user.organization_name}</p>}
            <img src={user.photo} width="90%" alt="profile"/>
            <p>{user.description}</p>
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
                <Paper><h2>My Spaces</h2>
                </Paper>
              </Grid>
              <Grid item>
                <Paper>
                  <BookingList
                    userId={user.id}
                    host={true}
                    bookingType="pending"
                    title="Pending Booking Requests"
                    emptyMessage="No pending requests!"
                  />
                </Paper>
              </Grid>
              <Grid item>
                <Paper>
                  <BookingList
                    userId={user.id}
                    host={true}
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
                userId={user.id}
                host={false}
                bookingType="all"
                title="My Bookings"
                emptyMessage="No booking requests!"
              />
            </Paper>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  )
}



