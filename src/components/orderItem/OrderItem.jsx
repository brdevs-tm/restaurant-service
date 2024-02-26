import React, { Fragment } from "react";
import "./index.css";

import trashBtn from "../../assets/img/icons/trash-red.svg";
import product from "../../assets/img/products/products.png";

const OrderItem = () => {
  return (
    <Fragment>
      <div className="item">
        <div className="item-informations">
          <div className="about-item">
            <img src={product} alt="" />
            <div className="name-price">
              <span>Spicy seasoned sea...</span>
              <span>2.9$</span>
            </div>
          </div>
          <div className="quant-price">
            <input type="number" className="item-quantity" />
            <span>4.5$</span>
          </div>
        </div>
        <div className="item-actions">
          <input
            type="text"
            placeholder="Please, just a little bit spicy only."
            className="item-note"
          />
          <button className="delete-item">
            <img src={trashBtn} alt="" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderItem;
