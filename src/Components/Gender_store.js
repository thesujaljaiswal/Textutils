import React from "react";
import "./Gender_store.css";

export default function Gender_store() {
  return (
    <>
      <div class="gender_shop">
        <div class="mens">
          <div>
            <img src={require("./men-model.jpg")} />
          </div>
          <div>
            <button>SHOP MENS</button>
          </div>
        </div>
        <div class="womens">
          <div>
            <img src={require("./women-model.jpg")} />
          </div>
          <div>
            <button>SHOP WOMENS</button>
          </div>
        </div>
      </div>
    </>
  );
}
