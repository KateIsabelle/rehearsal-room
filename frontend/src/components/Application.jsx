// Modules
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import '../Sass/App.scss'

// Components
// import Header from './Header'
import TopNav from './TopNav'
import HeroV1 from './HeroBlock/heroV1'
import CityList from './CityList/CityList'
import Space from './Space'
import Spaces from './Spaces'
import Login from './Login'
import Dashboard from './Dashboard'
import Footer from './Footer'


// Custom hooks
import useApplicationData from '../hooks/useApplicationData'

export default function App() {
  const { state, setUserInfo } = useApplicationData();

  return (
    <Router>
      <div className="App" >
        <TopNav user={state.user}/>
        <Switch>
          <Route exact path="/">
            <HeroV1 />
            <CityList />
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
            { state.user && <Space user_id={state.user.id} user_email={state.user.email}/> }
          </Route>
          <Route path="/dashboard">
            { !state.user && <Redirect to="/login"/> }
            { state.user && <Dashboard user={state.user} updateUser={setUserInfo} /> }
          </Route>
        </Switch>
        <Footer />
      </div >
    </Router>
  );
}

// DUMMY "COMPONENTS" JUST TO MAKE THE ROUTING WORK

function Register() {
  return (<h1>Registration form goes here!</h1>)
}