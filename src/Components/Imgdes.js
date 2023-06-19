import React from "react";
import "./imgdes.css";

export default function Imgdes() {
  return (
    <>
    <div className="outer-container">
      <div className="container-newin">
        <div className="image">
          <img
            className="w-full"
            id="img"
            src={require("./female.jpeg")}
            alt="female"
          />
        </div>
        <div className="des">Coco Stripes Heavyweight Oversized T-Shirt</div>
        <div className="pricing">
          <div>
            <p>
              <s>₹899.00</s>
            </p>
          </div>

          <div>
            <p className="price">₹599.00</p>
          </div>

        </div>


        <div className="wishlist-buttons">
          <div className="opt">
            <a href="/">SELECT OPTIONS</a>
          </div>
          <div className="wishlist">
            <a href="/">
              <img
                className="w-full"
                id="wl"
                src={require("./heart.png")}
                alt="heart"
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}
