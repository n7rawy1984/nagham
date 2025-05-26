import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src="https://picsum.photos/200" alt="صورة المنتج" />

      <h3>{product.name}</h3>
      <p>{product.price} جنيه</p>
      <button onClick={() => addToCart(product)}>إضافة إلى السلة</button>
    </div>
  );
};

export default ProductCard;
