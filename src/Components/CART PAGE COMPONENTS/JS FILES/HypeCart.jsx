import React from "react";
import "../CSS FILES/HypeCart.css";
import pants from "../IMAGES/pants.png";
const HypeCart = () => {
  return (
    <>
      {/* Shopping header div */}
      <div id="shopping-heading">
        <h1>Shopping bag</h1>
      </div>

      {/* Represents Image of card */}
      <div className="item">
        {/* Image of the product */}
        <div className="item-image">
          <img src={pants} alt="p1" />
        </div>

        {/* Outer Div of name and price and buttons*/}
        <div className="item-details">
          {/* Holds Item Name and Price and Size and total */}
          <div className="item-heading">
            <h3>Wide pull-on trousers</h3>
          </div>
          <div className="item_price">
            <p>Rs. 2000</p>
          </div>

          {/* Size and price outer div */}
          <div className="size_and_price">
            <div>
              <p>Size: M</p>
            </div>
            <div>
              <p>Total: Rs 2000</p>
            </div>
          </div>

          {/* Outer div of Wishlist button and quantity*/}
          <div className="wish_and_quantity">
            <div>
              <i className="fa-regular fa-heart"></i>
            </div>
            <div>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HypeCart;
