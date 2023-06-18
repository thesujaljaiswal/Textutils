import React from "react";
import "./videocard.css";

export default function Videocard() {
  return (
    <div className="video-container">
      <div className="video-text">Feel the HYPE</div>
      <div className="video-card">
        <video autoPlay muted loop>
          <source src="model.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}