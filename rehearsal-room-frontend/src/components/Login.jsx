import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {Button} from '../components/Button/Button'

export default function Login(props) {
  const [email, setEmail] = useState("");
 

  return (
    <form>
      <label>
        <p>Username</p>
        <input type="text" id="email" onChange={setEmail}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <Button size="small" label="Login"  onClick={()=> props.onLogin('dv1234@gmail.com')} ></Button>
      </div>
    </form>
  
  )
}


