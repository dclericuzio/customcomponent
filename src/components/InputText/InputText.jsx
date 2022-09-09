import React from 'react';
import './InputText.css';

const InputText = () => {
  return (

    <div className="inputcontainer">

        <div className="inputBox">
            <input type="text" required="required"/> 
            <span>First Name</span>
            <i></i>
        </div>
        <div className="inputBox">
            <input type="text" required="required"/> 
            <span>Last Name</span>
            <i></i>
        </div>
        <div className="inputBox">
            <input type="email" required="required"/> 
            <span>Email</span>
            <i></i>
        </div>
        <div className="inputBox">
            <input type="password" required="required"/> 
            <span>Password</span>
            <i></i>
        </div>
       
    </div>
  )
}

export default InputText