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
import HeroV1 from './HeroBlock/heroV1'
import Space from './Space'
import Spaces from './Spaces'

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
            <HeroV1 />
            <Spaces />
          </Route>
          <Route path="/space/:space_id">
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
            <HeroV1 />
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

function Login() {
  return (<h1>Login form goes here!</h1>)
}

function Register() {
  return (<h1>Registration form goes here!</h1>)
}

function Dashboard() {
  return (<h1>Dashboard page goes here!</h1>)
}