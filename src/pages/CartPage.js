import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import "../styles/CartPage.css";
const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>🛒 سلة المشتريات</h2>
      {cart.length > 0 ? (
        cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>💰 السعر: {product.price}</p>
          </div>
        ))
      ) : (
        <p>🚨 السلة فارغة، قم بإضافة منتجات!</p>
      )}
      <div>
        <Link to="/checkout" className="checkout-button">
          🛍️ إتمام الطلب
        </Link>
      </div>{" "}
    </div>
  );
};

export default CartPage;
