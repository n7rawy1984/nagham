// src/components/Header.js
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Keep your CSS file

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        {/* Logo with your daughter's image */}
        <Link to="/" className="logo">
          <img
            src="/images/logo.jpg" // Path to your image
            alt="Nagham"
            className="logo-image"
          />
          <span className="logo-text">
            <span>عالم</span>
            <br /> نغم{" "}
          </span>
        </Link>
        {/* Menu Links */}

        <div className="menu">
          <Link to="/cart" className="cart-link">
            <span className="cart-count">0</span>
            <svg
              className="cart-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ff6b98"
            >
              <path d="M22.713 4.077A2.993 2.993 0 0 0 20.41 3H4.242L4.2 2.649A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H18a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.82-2h11.92a5 5 0 0 0 4.921-4.113l.785-4.354a2.994 2.994 0 0 0-.65-2.456zM21.4 6.178l-.786 4.354A3 3 0 0 1 17.657 13H5.419l-.941-8H20.41a1 1 0 0 1 .99 1.178z" />
              <circle cx="7" cy="22" r="2" />
              <circle cx="17" cy="22" r="2" />
            </svg>

            <span className="cart-text">عربة التسوق</span>
          </Link>
          <Link to="/contact" className="menu-link">
            اتصل بنا
          </Link>
          <Link to="/about" className="menu-link">
            من نحن
          </Link>

          <Link to="/products" className="menu-link">
            المتجر
          </Link>

          <Link to="/" className="menu-link">
            الرئيسية
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
