import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CartButton.css";

const CartButton = () => {
  const navigate = useNavigate();

  return (
    <button className="cart-button" onClick={() => navigate("/cart")}>
      🛒 السلة
    </button>
  );
};

export default CartButton;
