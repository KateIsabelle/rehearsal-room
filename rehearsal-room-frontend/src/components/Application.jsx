// Modules
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { Fragment, useEffect } from "react";
import axios from "axios";

// Components
import Header from './Header'
import HeroV1 from './HeroBlock/heroV1'
import Space from './Space'

import Spaces from './Spaces'
import Login from './Login'

// Images
import logo from '../../src/logo.svg';

// CSS
import './App.css';

// Custom hooks
import useApplicationData from '../hooks/useApplicationData'

export default function App() {
  const { state, dispatch, setUserInfo } = useApplicationData();

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
        { true ? /* 1st: non-logged in; 2nd: logged in user */
        <Fragment>
          <Route path="/">
            <HeroV1 />
            <CityList />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login onLogin={setUserInfo}/>
          </Route>
          <Route path="/spaces/:city">
            <Spaces />
          </Route>
          <Route path="/space/:space_id">
            <Space />
          </Route>
          <Route path="/dashboard">
            <p>No dashboard for you. Get outta here</p>
          </Route>
        </Fragment> 
        :
        <Fragment>
          <Route path="/">
            <HeroV1 />
            <CityList />
          </Route>
          <Route path="/spaces/:city">
            <Spaces />
          </Route>
          <Route path="/space/:space_id">
            <Space />
          </Route>
          <Route path="/register">
            <p>Register route: You're already logged in!</p>
          </Route>
          <Route path="/login">
            <p>Logged in route: You're already logged in!</p>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
         
          </Fragment> }
        </Switch> 
        
      </div >
    </Router>
  );
}

// DUMMY "COMPONENTS" JUST TO MAKE THE ROUTING WORK

// We can later replace this with a proper component that lists all available cities.
function CityList() {
  return (
    <Fragment>
    <h2>Please select a city:</h2>
    <ul>
      <li>
       <Link to="/spaces/vancouver">Vancouver</Link>
      </li>
    </ul>
    </Fragment>
  )
}


function Register() {
  return (<h1>Registration form goes here!</h1>)
}

function Dashboard() {
  return (<h1>Dashboard page goes here!</h1>)
}