import React, { useState, useEffect, useContext } from "react";
import "../styles/ProductList.css";
import { CartContext } from "../context/CartContext";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "🖥️ لابتوب HP",
        price: "15,000 جنيه",
        image: "https://picsum.photos/150", // صورة تجريبية
      },
      {
        id: 2,
        name: "📱 هاتف سامسونج S24",
        price: "20,000 جنيه",
        image: "https://picsum.photos/150", // صورة تجريبية
      },
      {
        id: 3,
        name: "🎧 سماعات بلوتوث",
        price: "2,500 جنيه",
        image: "https://picsum.photos/150", // صورة تجريبية
      },
    ]);
  }, []);

  return (
    <div>
      <h2>🛍️ قائمة المنتجات</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>💰 السعر: {product.price}</p>
            <button onClick={() => addToCart(product)}>🛒 أضف إلى السلة</button>
          </div>
        ))
      ) : (
        <p>🚨 لا توجد منتجات متاحة حاليًا!</p>
      )}
    </div>
  );
};

export default ProductList;
