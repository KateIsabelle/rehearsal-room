import React from "react";
import { Button } from '../Button/Button';
import { useHistory, NavLink, Link } from 'react-router-dom';
// import './_Header.scss'
import logo from './plans.svg'




export default function Header(props) {
  let history = useHistory()
  return (
    <header>
    <div className="wrapper">
      <div>
        <div className="header-list">
          <NavLink to="/" component={Logo} />
          <Button secondary="true" size="medium" label="Browse Spaces" onClick={()=>{history.push('/spaces/Vancouver')}} />
        </div>
      </div>
      <div>
        {props.user ? (
          <div className="user-greeting-logout">
            <Link to={'/dashboard'} style={{paddingRight: 13, textDecoration: 'none'}}>
              <h3>{props.user.first_name}'s Profile</h3>
            </Link>
            <Button primary size="small" label="Log out" />
          </div>
          ) : (
            <>
              <Button primary onClick={()=>{history.push('/login')}}size="small" label="Log in" />
              <Button primary size="small" label="Sign up" />
            </>
          )}
      </div>
    </div>
  </header>

  )
}

function Logo() {
  return (
    <>
    <Link className="h-logo" to={'/'}><img height="42" width="42" src={logo} alt="" /></Link>
    <h1>
      | Rehearsal Room |
    </h1>
    </>
  )
}