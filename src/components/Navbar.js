import React from "react";
import "../styles/Navebar.css";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Naghmi Store</h1>
      <ul>
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="/products">المنتجات</Link>
        </li>
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
