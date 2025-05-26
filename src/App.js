import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import "./styles/App.css";
function App() {
  return (
    <CartProvider>
      <div className="app">
        <Router>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />{" "}
              {/* ✅ تصحيح المسار هنا */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
