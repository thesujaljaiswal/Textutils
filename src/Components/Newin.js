import React from "react";
import Imgdes from "./components/Imgdes";
import "./newin.css";

export default function Newin() {
  return (
    <>
    <div className="container">
        <h1>New In</h1>
    </div>
      <div className="carousel-cards">
        <Imgdes />
        <Imgdes />
        <Imgdes />
      </div>
    </>
  );
}
