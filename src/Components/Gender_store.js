import React from "react";
import "./Gender_store.css";

export default function Gender_Store() {
  return (
    <>
      <div className="gender_shop">
        <div className="mens">
          <div className="img">
            <img src={require("./men-model.jpg")} alt="mensimage" />
          </div>
          <div>
            <button className="btn-gender">SHOP MENS</button>
          </div>
        </div>
        <div className="womens">
          <div className="img">
            <img src={require("./women-model.jpg")} alt="womensimage"/>
          </div>
          <div>
            <button className="btn-gender">SHOP WOMENS</button>
          </div>
        </div>
      </div>
    </>
  );
}
