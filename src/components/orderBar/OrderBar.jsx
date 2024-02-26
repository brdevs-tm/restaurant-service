import React, { Fragment } from "react";
import "./index.css";

import trashBtn from "../../assets/img/icons/trash-red.svg";

import product from "../../assets/img/products/products.png";
import OrderItem from "../orderItem/OrderItem";

const OrderBar = () => {
  return (
    <Fragment>
      <section className="order-bar">
        <div className="order-header">
          <h1>Orders #34562</h1>
        </div>
        <div className="order-type">
          <button className="type dine-in">Dine in</button>
          <button className="type to-go">To Go</button>
          <button className="type delivery">Delivery</button>
        </div>
        <div className="items">
          <div className="items-head">
            <h1>Item</h1>
            <div className="amount-price">
              <span>Qty</span>
              <span>Price</span>
            </div>
          </div>
          <hr />
          <div className="items-column">
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
        </div>
        <div className="payment">
          <hr />
          <div className="discount">
            <span>Discount</span>
            <p>0$</p>
          </div>
          <div className="sub-total">
            <span>Sub Total</span>
            <p>21$</p>
          </div>
          <button className="payment-btn">Payment</button>
        </div>
      </section>
    </Fragment>
  );
};

export default OrderBar;
