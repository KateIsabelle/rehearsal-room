import React, { useState } from "react";
import { Button } from '../Button/Button';
import { useHistory, NavLink, Link } from 'react-router-dom';
import logo from '../Header/plans.svg'



export default function TopNav() {
  const [menuState, setMenuState] = useState(false)
  const history = useHistory()

  const menuShow = menuState ?
    {
      display: 'flex',
      top: 0
    }
    :
    {
      top: '-100%'
    }

  return (
    <nav>
      <Logo></Logo>
      <div className="open-menu" onClick={() => setMenuState(true)}><i class="fas fa-bars"></i></div>
      <ul className="main-menu" style={menuShow}>
        <li onClick={()=>{history.push('/spaces/vancouver')}}>Browse Spaces</li>
        <li>Login</li>
        <li>Sign Up</li>
        <div className="close-menu" onClick={() => setMenuState(false)}><i class="far fa-times-circle"></i></div>
      </ul>
    </nav>
  )
}


function Logo() {
  return (
    <Link className="header-logo" to={'/spaces/vancouver'}><img height="42" width="42" src={logo} alt="" />
      <h1 className="">
        | Rehearsal Room |
      </h1>
    </Link>
  )
}
