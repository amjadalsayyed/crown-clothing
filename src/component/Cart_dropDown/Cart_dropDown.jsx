import "./Cart_dropDown.scss";
import React, { useContext } from "react";
import Button from "../button/Button";
import Cart_item from "../cart-item/Cart_item";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

const Cart_dropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <Cart_item key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button style={{ fontSize: "12px" }}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default Cart_dropDown;
