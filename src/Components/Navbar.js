import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navref = useRef();

  const showNavbar = () =>{
    navref.current.classList.toggle("responsive_nav");
  }

  return (
    <>
      <div className="navbar">
        <div className="options" ref={navref}>
          <a className="buttons" href="/">
            MENS
          </a>
          <a className="buttons" href="/">
            WOMENS
          </a>
          <a className="buttons" href="/">
            KIDS
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
        <div className="logo">
          <img src={require("./HYPE.png")} alt="HYPE" />
        </div>
        <div className="icons">
          <a href="/">
            <img src={require("./search.png")} alt="HYPE" />
          </a>
          <a href="/">
            <img src={require("./cart.png")} alt="HYPE" />
          </a>
          <a href="/">
            <img src={require("./user.png")} alt="HYPE" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
