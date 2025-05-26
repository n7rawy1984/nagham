import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const hamburgerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // إغلاق القائمة إذا تم النقر خارجها وخارج زر الهامبرجر
      if (
        menuOpen &&
        menuRef.current &&
        hamburgerRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="nav">
        <button
          ref={hamburgerRef}
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <NavLink to="/" className="logo">
          <img src="/images/logo.jpg" alt="Nagham" className="logo-image" />
          <span className="logo-text">
            عالم <br /> نغم
          </span>
        </NavLink>

        <div ref={menuRef} className={`menu ${menuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            onClick={handleLinkClick}
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            onClick={handleLinkClick}
          >
            المتجر
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            onClick={handleLinkClick}
          >
            من نحن
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            onClick={handleLinkClick}
          >
            اتصل بنا
          </NavLink>
          <NavLink to="/cart" className="cart-link" onClick={handleLinkClick}>
            <span className="cart-count">0</span>
            <svg
              className="cart-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ff6b98"
            >
              <path d="M22.713 4.077A2.993 2.993 0 0 0 20.41 3H4.242L4.2 2.649A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H18a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.82-2h11.92a5 5 0 0 0 4.921-4.113l.785-4.354a2.994 2.994 0 0 0-.65-2.456z" />
              <circle cx="7" cy="22" r="2" />
              <circle cx="17" cy="22" r="2" />
            </svg>
            <span className="cart-text">عربة التسوق</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
