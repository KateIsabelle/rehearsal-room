import React from "react";
import { Button } from '../Button/Button';
import { useHistory, NavLink, Link } from 'react-router-dom';
import './header.css'




export default function Header(props) {
  let history = useHistory()
  return (

    <header>
    <div className="wrapper">
      <div>
      <div className="header-list">
        <NavLink to="/" component={Logo} />
        
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
    <Link to={'/'}><img src='https://www.flaticon.com/svg/vstatic/svg/386/386107.svg?token=exp=1620604584~hmac=584f6d47c262f7eaa45cf32d56fbaea5' width="32" height="32" alt="" /></Link>
    <h1>
      Rehearsal Room
    </h1>
    </>
  )
}