import "./cart_icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const Cart_Icon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { overallQuantity } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{overallQuantity}</span>
    </div>
  );
};

export default Cart_Icon;
