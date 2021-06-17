import React from "react";
import { Button } from '../Button/Button';
import { useHistory, NavLink, Link } from 'react-router-dom';
import logo from '../Header/plans.svg'

export default function HeaderNew() {
  return (
    <nav>
          <NavLink to="/" component={Logo} />
          <div className="logo"></div>
      <div className="open-menu"><i class="fas fa-bars"></i></div>
      <ul className="main-menu">
        <li>Browse Spaces</li>
        <li>Login</li>
        <li>Sign Up</li>
        <div className="close-menu"><i class="far fa-times-circle"></i></div>
      </ul>
    </nav>
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