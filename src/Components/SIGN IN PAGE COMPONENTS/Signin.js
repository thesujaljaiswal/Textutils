import React from 'react'
import "./signin.css";
export default function Signin() {
  return (
    <>
      <div className="outer-container">
        <div className="signin">Sign in</div>
        <div className="emaildes">
        <div className="email">Email *</div>
        <input type="email" name="email" id="emailbox" />
        </div>
        <div className="passdes">
        <div className="password">Password *</div>
        <input type="password" name="password" id="passwordbox" />
        </div>
        <div className="remme">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <div className="rem">Remember me</div>
        </div>
        {/* <div className="sign">
        <a href="/"><p id="in">Sign in</p></a>
        </div> */}
        <input type="button" value="Sign in" id='sign' color='white'/>
        <div className="imp">
        <a href="/" id='forgetpass'>Forgotten your password?</a>
        <div className="noacc">No Account?<a href="/">Sign up</a> </div>
        <div className="google"><a href="/">
            <img
            className="google-signin"
            id="img"
            src={require("./google.png")}
            alt="google"
          /> </a>
          </div>
          </div>
         
      </div>
    </>
  )
}
