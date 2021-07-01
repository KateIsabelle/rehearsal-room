import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import {Button} from '../components/Button/Button'

export default function Login(props) {
  const [email, setEmail] = useState("");

  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/spaces/vancouver`; 
    history.push(path);
  }

  const handleSubmit = function(txt) {
    props.onLogin(txt);
    routeChange();
};
const handleChange = function(e) {
    const value = e.target.value;
    setEmail(value);
};
 
  return (
    <>
    <form onSubmit={event => event.preventDefault()}>
      <label >
        <p>Username</p>
        <input className="login-mrg" type="text" id="email" onChange={handleChange}/>
      </label>
      <label>
        <p>Password</p>
        <input className="login-mrg" type="password" />
      </label>
      <div>
        <Button size="small" label="Login"  onClick={() => handleSubmit(email)} ></Button>
        <Button size="small" label="Login as Mabel"  onClick={() => handleSubmit("mabel.g@ythecultch.ca")} ></Button>
        <Button size="small" label="Login as Declan"  onClick={() => handleSubmit("dv1234@gmail.com")} ></Button>
        <Button size="small" label="Login as Bob"  onClick={() => handleSubmit("the_man422@hotmail.com")} ></Button>
        <Button size="small" label="Login as Derrick"  onClick={() => handleSubmit("blue.steel@gmail.com")} ></Button>
        <Button size="small" label="Login as Petunia"  onClick={() => handleSubmit("petty_s123@gmail.com")} ></Button>
      </div>
      </form>
    </>
  )
}




