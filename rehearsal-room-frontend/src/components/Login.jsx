import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login({setUserInfo}) {
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
        <button onClick={() => setUserInfo(email)}>Submit</button>
      </div>
    </form>
  
  )
}


