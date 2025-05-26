import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>🎈 نغم لاند - عالم المرح للأطفال</h2>
          <p>نحن هنا لجعل تجربة التسوق أكثر متعة وسهولة! ✨</p>
        </div>

        <div className="footer-links">
          <h3>روابط سريعة</h3>
          <ul>
            <li>
              <a href="/about">من نحن</a>
            </li>
            <li>
              <a href="/contact">اتصل بنا</a>
            </li>
            <li>
              <a href="/shipping">الشحن والاسترجاع</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>تابعنا على</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 نغم لاند - جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
