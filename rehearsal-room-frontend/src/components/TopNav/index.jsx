import React from "react";
import { Button } from '../Button/Button';
import { useHistory, NavLink, Link } from 'react-router-dom';
import logo from '../Header/plans.svg'

const hamburgerMenu = (status) => {
  const mainMenu = document.querySelector('.main-menu')

  switch (status) {
    case 'open':
      // alert('open');
      mainMenu.style.display = 'flex';
      mainMenu.style.top = '0';
      break;
    case 'close':
      // alert('close');
      // mainMenu.style.display 
      mainMenu.style.top = '-100%'
      break;
  }
}


export default function TopNav() {
  return (
    <nav>
      <div className="logo"><NavLink to="/" component={Logo} /></div>
      <div className="open-menu" onClick={() => hamburgerMenu('open')}><i class="fas fa-bars"></i></div>
      <ul className="main-menu">
        <li>Browse Spaces</li>
        <li>Login</li>
        <li>Sign Up</li>
        <div className="close-menu" onClick={() => {hamburgerMenu('close')}}><i class="far fa-times-circle"></i></div>
      </ul>
    </nav>
  )
}


function Logo() {
  return (
    <Link className="header-logo" to={'/'}><img height="42" width="42" src={logo} alt="" />
      <h1 className="">
        | Rehearsal Room |
      </h1>
    </Link>
  )
}