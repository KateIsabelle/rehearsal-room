// Modules
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Header from './Header'

// Images
import logo from '../../src/logo.svg';

// CSS
import './App.css';

// Hooks
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
      </div >
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

function Home() {
  return <Link to="/vancouver">Vancouver</Link>
}