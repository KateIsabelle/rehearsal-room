import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {Button} from '../components/Button/Button'
import './Login.scss'

export default function Login(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = function(txt) {
    props.onLogin(txt);
};
const handleChange = function(e) {
    const value = e.target.value;
    setEmail(value);
};
 
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        <p>Username</p>
        <input type="text" id="email" onChange={handleChange}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <Button size="small" label="Login"  onClick={() => handleSubmit(email)} ></Button>
      </div>
      <div className="playing"></div>
    </form>
  
  )
}

// 'dv1234@gmail.com'


