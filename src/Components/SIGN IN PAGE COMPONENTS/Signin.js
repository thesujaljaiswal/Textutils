import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";
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
        <Link to="/sigin"><p id="in">Sign in</p></Link>
        </div> */}
        <input type="button" value="Sign in" id="sign" color="white" />
        <div className="imp">
          <Link to="/sigin" id="forgetpass">
            Forgotten your password?
          </Link>
          <div className="noacc">
            No Account?<Link to="/sigin">Sign up</Link>{" "}
          </div>
          <div className="google">
            <Link to="/sigin">
              <img
                className="google-signin"
                id="img"
                src={require("./google.png")}
                alt="google"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
