import React from "react";
import { Button } from '../Button/Button';
import './navbar.css'




export default function Navbar(props) {
  
  return (

    <header>
    <div className="wrapper">
      <div>
      <div className="header-list">
        <img src='https://www.flaticon.com/svg/vstatic/svg/386/386107.svg?token=exp=1620604584~hmac=584f6d47c262f7eaa45cf32d56fbaea5' width="32" height="32"></img>
        
          <h1>Rehearsal Room</h1>
          |   
          <h3>Browse</h3>
          |
          <h3>About us</h3>
        </div>
      </div>
      <div>
            <Button size="small" label="Log in" />
            <Button primary size="small"  label="Logout" />
      </div>
    </div>
  </header>

  )

}