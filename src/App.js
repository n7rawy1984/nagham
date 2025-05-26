import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />{" "}
          {/* ✅ تأكد من وجود هذا المسار */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
