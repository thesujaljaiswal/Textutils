import React from "react";
import "./ProductDetails.css";

export default function ProductDetails() {
  return (
    <div>
      {/* Outer div of product details */}
      <div className="product_details_div">
        {/* Has name of the product */}
        <div className="product_name_div">
          <h3>Short black skirt</h3>
        </div>

        {/* Holds the price and the discount of product */}
        <div className="product_price_div">
          <div>
            <h4>Rs. 2,199</h4>
          </div>
          <div className="discount_msg">
            <div>
              <b>30% off</b>
            </div>
          </div>
        </div>

        {/* Holds reviews and stars of product */}
        <div className="product_review_div">
          <div>
            <h4>Reviews</h4>
          </div>

          <div className="reviews_stars">
            <div>
              <img src="reviews_star.png"></img>
            </div>
            <div>
              <img src="reviews_star.png"></img>
            </div>
            <div>
              <img src="reviews_star.png"></img>
            </div>
            <div>
              <img src="reviews_star.png"></img>
            </div>
          </div>
        </div>

        {/* Holds Colour option of product */}
        <div className="product_colour_div">
          <div>
            <h4>Colour</h4>
          </div>

          <div className="colour_collection">
            <div className="colour_option"></div>
            <div className="colour_option"></div>
            <div className="colour_option"></div>
            <div className="colour_option"></div>
          </div>
        </div>

        <div className="size_text">
          <h4>Sizes</h4>
        </div>

        {/* All the buttons with sizes */}
        <div className="product_size_div">
          <div className="product_size">
            <div className="size_button_div">
              <a href="/">XS</a>
            </div>

            <div className="size_button_div">
              <a href="/">S</a>
            </div>

            <div className="size_button_div">
              <a href="/">M</a>
            </div>
          </div>

          <div className="product_size">
            <div className="size_button_div">
              <a href="/">L</a>
            </div>
            <div className="size_button_div">
              <a href="/">XL</a>
            </div>
            <div className="size_button_div">
              <a href="/">XXL</a>
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <div className="add_to_cart_button_div">
          <div>
            <img src="add_icon_text.png"></img>
          </div>
        </div>

        {/* 4 points with icons after add button */}
        <div className="product_points_div">
          <div className="sub_points">
            <div className="point">
              <div>
                <img src="delivery_icon.png"></img>
              </div>
              <div>
                <p>Standard delivery in 4-7 days</p>
              </div>
            </div>

            <div className="point">
              <div>
                <img src="gift_box.png"></img>
              </div>
              <div>
                <p>Get a hamper on your first order</p>
              </div>
            </div>
          </div>

          <div className="sub_points">
            <div className="point">
              <div>
                <img src="shake_hand.png"></img>{" "}
              </div>
              <div>
                <p>Product you can trust</p>
              </div>
            </div>

            <div className="point">
              <div>
                <img src="payment.png"></img>
              </div>
              <div>
                <p>Multiple mode of payments available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
