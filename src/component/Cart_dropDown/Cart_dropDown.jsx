import "./Cart_dropDown.scss";
import React from "react";
import Button from "../button/Button";

const Cart_dropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button style={{ fontSize: "12px" }}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default Cart_dropDown;
