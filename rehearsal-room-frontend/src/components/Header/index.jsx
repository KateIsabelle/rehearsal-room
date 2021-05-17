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

        <Link  to="/spaces/Vancouver" style={{textDecoration: 'none'}}><h3>Browse spaces</h3></Link>
        <Link style={{textDecoration: 'none'}}><h3>About us</h3></Link>

        </div>
      </div>
      <div>
        {props.user ? (
            <tag className="user-greeting-logout">
                <Link to={'/dashboard'} style={{paddingRight: 13, textDecoration: 'none'}}><h3>{props.user.first_name}'s Profile</h3></Link>
                <Button primary size="small" label="Log out" />
            </tag>
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
    <Link to={'/'}><img src={logo} width="35" height="35" alt="" /></Link>
    <h1>
      | Rehearsal Room |
    </h1>
    </>
  )
}