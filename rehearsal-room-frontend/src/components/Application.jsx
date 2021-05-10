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
import Space from './Space'

// Images
import logo from '../../src/logo.svg';

// CSS
import './App.css';

// Custom hooks
import useApplicationData from '../hooks/useApplicationData'

export default function App() {
  const { state, dispatch } = useApplicationData();

  return (
    <Router>
      <div className="App" >
        <Header />
        <h2>Route tester (can remove once general site navigation works):</h2>
        <ul>
          <li>
            <Link to="/">Root</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/spaces/:city">
            <SpaceList />
          </Route>
          <Route path="/space/:id">
            <Space />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <CityList />
          </Route>
        </Switch>
      </div >
    </Router>
  );
}

// DUMMY "COMPONENTS" JUST TO MAKE THE ROUTING WORK

// We can later replace this with a proper component that lists all available cities.
function CityList() {
  return (
    <>
    <h2>Please select a city:</h2>
    <ul>
      <li>
       <Link to="/spaces/vancouver">Vancouver</Link>
      </li>
    </ul>
    </ >
  )
}

// Similarly, we can move this into the SpaceList component
function SpaceList() {
  let { city } = useParams();
  return (
    <>
    <h1>SpaceList for {city} rendered! Send a GET req to /api/spaces/vancouver to get the data.</h1>
    <h1>It might make sense to store the resulting array of Spaces in the state of SpaceList, so that we can just pass the data to Space components as props</h1>
    <h2>Here's a hard-coded link to a space:</h2>
    <ul>
      <li>
        <Link to="/space/1">Space #1</Link>
      </li>
    </ul>
    </ >
  )
}

function Login() {
  return (<h1>Login form goes here!</h1>)
}

function Register() {
  return (<h1>Registration form goes here!</h1>)
}

function Dashboard() {
  return (<h1>Dashboard page goes here!</h1>)
}