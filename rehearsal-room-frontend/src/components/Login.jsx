import React from 'react';
import { Link } from "react-router-dom";

export default function Login(props) {
  
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
        <button type="submit">Submit</button>
      </div>
    </form>
  
  )
}


