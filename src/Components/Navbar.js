import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";
import logo from './HYPE.png'
import searchicon from './search.png'
import carticon from './cart.png'
import usericon from './user.png'

const Navbar = (props) => {
  const navref = useRef();

  const showNavbar = () =>{
    navref.current.classList.toggle("responsive_nav");
  }

  return (
    <>
      <div className="navbar ">
        <div className="options" ref={navref}>
          <a className="buttons" href="/">
            {props.opt1}
          </a>
          <a className="buttons" href="/">
            {props.opt2}
          </a>
          <a className="buttons" href="/">
            {props.opt3}
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
        <div className="logo">
          <img src={logo} alt="HYPE" />
        </div>
        <div className="icons">
          <a href="/">
            <img src={searchicon} alt="HYPE" />
          </a>
          <a href="/">
            <img src={carticon} alt="HYPE" />
          </a>
          <a href="/">
            <img src={usericon} alt="HYPE" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
