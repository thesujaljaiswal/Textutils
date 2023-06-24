import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";
import logo from './HYPE.png'
import searchicon from './search.png'
import carticon from './cart.png'
import usericon from './user.png'
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navref = useRef();

  const showNavbar = () =>{
    navref.current.classList.toggle("responsive_nav");
  }

  return (
    <>
      <div className="navbar ">
        <div className="options" ref={navref}>
          <Link className="buttons" to="/products">
            {props.opt1}
          </Link>
          <Link className="buttons" to="/products">
            {props.opt2}
          </Link>
          <Link className="buttons" to="/products">
            {props.opt3}
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="HYPE" />
          </Link>
        </div>
        <div className="icons">
          <Link to="/">
            <img src={searchicon} alt="HYPE" />
          </Link>
          <Link to="/cart">
            <img src={carticon} alt="HYPE" />
          </Link>
          <Link to="/signin">
            <img src={usericon} alt="HYPE" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
