import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <h1>🎈 أهلاً بك في نغم لاند!</h1>
        <p>
          نحن هنا لنحول تجربة التسوق للأطفال إلى لحظة مليئة بالمرح والابتكار! ✨
          نقدم لك أفضل الألعاب، الملابس، والمستلزمات التي تجمع بين الأمان،
          الأناقة، والجودة العالية.
        </p>

        <div className="about-values">
          <h2>🎯 رؤيتنا</h2>
          <p>
            أن نكون الوجهة الأولى لكل من يبحث عن منتجات أطفال تجمع بين الجودة
            والمرح.
          </p>

          <h2>💡 قيمنا</h2>
          <ul>
            <li>✔ منتجات آمنة وصديقة للأطفال</li>
            <li>✔ تجربة تسوق سلسة وعصرية</li>
            <li>✔ خدمة عملاء تهتم بكل التفاصيل</li>
          </ul>
        </div>

        <div className="about-contact">
          <h2>📞 تواصل معنا</h2>
          <p>
            تابعنا على مواقع التواصل الاجتماعي أو تواصل معنا عبر البريد
            الإلكتروني للحصول على أفضل تجربة!
          </p>
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
    </section>
  );
};

export default AboutUs;
