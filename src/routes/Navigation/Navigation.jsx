import React from "react";
import Cart_Icon from "../../component/Cart_icon/Cart_Icon";
import Cart_dropDown from "../../component/Cart_dropDown/Cart_dropDown";
import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <Cart_Icon />
        </div>
        {isCartOpen && <Cart_dropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
