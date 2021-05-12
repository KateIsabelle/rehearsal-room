import React from "react";
import { Button } from '../Button/Button';
import { NavLink, Link } from 'react-router-dom';
import './header.css'




export default function Header(props) {
  return (

    <header>
    <div className="wrapper">
      <div>
      <div className="header-list">
        <NavLink to="/" component={Logo} />

        <h3>About us</h3>
        </div>
      </div>
      <div>
        {props.user ? (
            <tag className="user-greeting-logout">
              <p>Hi, {props.user.first_name}</p>
                <Button onClick={() => { alert('Your booking request has been submitted. [The host] will be in touch with confirmation.') }}size="small" label="Log out" />
            </tag>
          ) : (
            <>
              {/* <Link to="/login" className="btn btn-primary">Login</Link> */}
              <Button size="small" label="Log in" />
              <Button primary size="small" label="Sign up" />
            </>
          )}
{/* 
            <Button size="small" label="Log in" />
            <Button primary size="small"  label="Logout" /> */}
      </div>
    </div>
  </header>

  )
}

function Logo() {
  return (
    <>
    <img src='https://www.flaticon.com/svg/vstatic/svg/386/386107.svg?token=exp=1620604584~hmac=584f6d47c262f7eaa45cf32d56fbaea5' width="32" height="32" alt=""></img>
    <h1>
      <NavLink to='/'>Rehearsal Room</NavLink>
    </h1>
    </>
  )
}