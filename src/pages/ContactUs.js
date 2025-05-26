import React, { useState } from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! ✅ سنرد عليك قريبًا.");
  };

  return (
    <section className="contact-us">
      <div className="contact-container">
        <h1>📞 تواصل معنا!</h1>
        <p>هل لديك استفسار أو تحتاج إلى مساعدة؟ نحن هنا لمساعدتك! ✨</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="الاسم بالكامل"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="اكتب رسالتك هنا..."
            onChange={handleChange}
            required
          />
          <button type="submit">📩 إرسال الرسالة</button>
        </form>

        <div className="contact-info">
          <h2>📍 معلومات التواصل</h2>
          <p>📧 البريد الإلكتروني: support@naghm-land.com</p>
          <p>📱 رقم الهاتف: +20 123 456 7890</p>
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

export default ContactUs;
