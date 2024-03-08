import React from "react";
import Logo from "../assets/pic.png"; // Import the default export directly
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="slogo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Card
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart:2</span>
      </Link>
    </header>
  );
};
