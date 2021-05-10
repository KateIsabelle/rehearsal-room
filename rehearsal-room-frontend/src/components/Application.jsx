// Modules
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

// Components
import Header from './Header'

// Images
import logo from '../../src/logo.svg';

// CSS
import './App.css';

// Custom hooks
import useApplicationData from '../hooks/useApplicationData'

export default function App() {
  const {
    state,
    dispatch
  } = useApplicationData();
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));

  return (
    <Router>
      <div className="App" >
        <Header />
        <Switch>
          <Route path="/spaces/:city">
            <SpaceList />
          </Route>

          <Route path="/">
            <CityList />
          </Route>
        </Switch>
      </div >
    </Router>
  );
}


// We can later replace this with a proper component that lists all available cities.
function CityList() {
  return <Link to="/spaces/vancouver">Vancouver</Link>
}

// Similarly, we can move this into the SpaceList component
function SpaceList() {
  let { city } = useParams();
  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/spaces/${city}`,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [city]);
  return (
    <h1>SpaceList rendered!</h1>
  )
}