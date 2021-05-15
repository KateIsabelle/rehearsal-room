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

import SpaceCreateForm from "./Space/SpaceCreateForm";

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
          <Route exact path="/">
            <HeroV1 />
            <CityList />
          </Route>

          <Route exact path="/space/create">
            <SpaceCreateForm />
          </Route>

          <Route path="/register">
            { !state.user && <Register /> }
            { state.user && <Redirect to="/dashboard" /> }
          </Route>
          <Route path="/login">
            { !state.user && <Login onLogin={setUserInfo}/> }
            { state.user && <Redirect to="/" /> }
          </Route>
          <Route path="/spaces/:city">
            <HeroV1 />
            <Spaces />
          </Route>
          <Route path="/space/:space_id">
            { !state.user && <Space user_id={null} /> }
            { state.user && <Space user_id={state.user.id}/> }
          </Route>
          <Route path="/dashboard">
            { !state.user && <Redirect to="/login"/> }
            { state.user && <Dashboard user={state.user} updateUser={setUserInfo} /> }
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