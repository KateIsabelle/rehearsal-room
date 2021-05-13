// Modules
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from "react-router-dom";
import { Fragment, useEffect } from "react";
import axios from "axios";

import '../Sass/App.scss'

// Components
import Header from './Header'
import HeroV1 from './HeroBlock/heroV1'
import Space from './Space'

import Spaces from './Spaces'
import Login from './Login'
import Dashboard from './Dashboard'

// CSS
import './App.css';

// Custom hooks
import useApplicationData from '../hooks/useApplicationData'

export default function App() {
  const { state, dispatch, setUserInfo } = useApplicationData();

  return (
    <Router>
      <div className="App" >
        <Header user={state.user}/>
        <Switch> 
        { !state.user ? /* 1st: non-logged in user path */
        <Fragment>
          <Route exact path="/">
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
            <HeroV1 />
            <Spaces />
          </Route>
          <Route path="/space/:space_id">
            <Space user_id={null} />
          </Route>
          <Route path="/dashboard">
            <p>No dashboard for you. Get outta here</p>
          </Route>
        </Fragment> 
        : /* 2nd: logged-in user path */
        <Fragment>
          <Route exact path="/">
            <HeroV1 />
            <CityList />
          </Route>
          <Route path="/spaces/:city">
            <HeroV1 />
            <Spaces />
          </Route>
          <Route path="/space/:space_id">
            <Space user_id={state.user.id}/>
          </Route>
          <Route path="/register">
            <p>Register route: You're already logged in!</p>
          </Route>
          <Route path="/login">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard">
            <Dashboard user={state.user} />
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