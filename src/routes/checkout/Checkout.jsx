import "./Checkout.scss";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Checkoutitem from "../../component/checkout_item/Checkout_item";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <Checkoutitem key={item.id} cartItem={item} />
      ))}

      <span className="total-text">Total : ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
