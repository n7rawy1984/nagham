import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // ✅ تأكد أن المنتج يُضاف للسلة
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {" "}
      {/* ✅ تأكد أن `addToCart` موجود هنا */}
      {children}
    </CartContext.Provider>
  );
};
