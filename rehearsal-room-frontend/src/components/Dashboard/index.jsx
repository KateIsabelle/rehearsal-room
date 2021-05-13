
// Custom Components
import HostDashboardItems from './HostDashboardItems'
import ArtistDashboardItems from './ArtistDashboardItems'

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
          <Paper >{user.first_name} {user.last_name}
            <img src={user.photo} width="90%" alt="profile"/>
            <p>{user.description}</p>
            <p><strong>{user.organization_name}</strong></p>
          </Paper>
        </Grid>
        { user.is_host && <HostDashboardItems hostId={user.id} />}
        <ArtistDashboardItems artistId={user.id} />


      </Grid>
    </Container>
  )
}



