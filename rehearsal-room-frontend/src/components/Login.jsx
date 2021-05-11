import React from 'react';
import { Link } from "react-router-dom";

export default function Login({setBookings}) {
  
  return (
    <form>
      <label>
        <p>Username</p>
        <input type="text" id="email"/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit" onClick={()=> setBookings(2)}>Submit</button>
      </div>
    </form>
  
  )
}


