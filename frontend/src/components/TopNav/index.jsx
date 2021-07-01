import React, { useState } from "react";
import { Button } from '../Button/Button';
import { useHistory, NavLink, Link } from 'react-router-dom';
import logo from '../Header/plans.svg'



export default function TopNav(props) {
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
      {!props.user ? 
        <ul className="main-menu" style={menuShow}>
          <li onClick={()=>{history.push('/spaces/vancouver')}}>Browse Spaces</li>
          <li onClick={()=>{history.push('/login')}}>Login</li>
          <li>Sign Up</li>
          <div className="close-menu" onClick={() => setMenuState(false)}><i class="far fa-times-circle"></i></div>
        </ul>
      :
        <ul className="main-menu" style={menuShow}>
          <li onClick={()=>{history.push('/spaces/vancouver')}}>Browse Spaces</li>
          <li onClick={()=>{history.push('/dashboard')}}>{props.user.first_name}'s Dashboard</li>
          <li>Logout</li>
          <div className="close-menu" onClick={() => setMenuState(false)}><i class="far fa-times-circle"></i></div>
        </ul>
      }
    </nav>
  )
}

// {props.user ? (
//   <div className="user-greeting-logout">
//     <Link to={'/dashboard'} style={{paddingRight: 13, textDecoration: 'none'}}>
//       <h3> {props.user.first_name}'s Profile</h3>
//     </Link>
//     <Button primary size="small" label="Log out" />
//   </div>
//   ) : (
//     <>
//       <Button primary onClick={()=>{history.push('/login')}}size="small" label="Log in" />
//       <Button primary size="small" label="Sign up" />
//     </>
//   )}


function Logo() {
  return (
    <Link className="header-logo" to={'/spaces/vancouver'}><img height="42" width="42" src={logo} alt="" />
      <h1 className="">
        | Rehearsal Room |
      </h1>
    </Link>
  )
}
