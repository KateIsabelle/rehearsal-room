import React, { useState } from "react";
import { Button } from '../Button/Button';
import { useHistory, NavLink, Link } from 'react-router-dom';
import logo from '../Header/plans.svg'



export default function TopNav() {
  const [menuState, setMenuState] = useState(false)

  // const mainMenu = `main-menu ${menuState ? 'display-menu' : ''}`

  const menuShow = menuState ?
    {
      display: 'flex',
      top: 0
    }
    :
    {
      top: '-100%'
    }


  // useEffect(() => {
  //   const hamburgerMenu = (status) => {
  //     const mainMenu = document.querySelector('.main-menu')
    
  //     switch (status) {
  //       case 'open':
  //         mainMenu.style.display = 'flex';
  //         mainMenu.style.top = '0';
  //         break;
  //       case 'close':
  //         mainMenu.style.top = '-100%'
  //         break;
  //     }
  //   }
  // })
  return (
    <nav>
      <div className="logo"><NavLink to="/" component={Logo} /></div>
      <div className="open-menu" onClick={() => setMenuState(true)}><i class="fas fa-bars"></i></div>
      <ul className="main-menu" style={menuShow}>
        <li>Browse Spaces</li>
        <li>Login</li>
        <li>Sign Up</li>
        <div className="close-menu" onClick={() => setMenuState(false)}><i class="far fa-times-circle"></i></div>
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