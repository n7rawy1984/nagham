import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "أم ياسمين",
    review: "منتجات رائعة وخدمة سريعة! طفلي يعشق الألعاب من نغم لاند! 💖",
  },
  {
    name: "محمد العتيبي",
    review:
      "أفضل متجر للأطفال، جودة عالية وسعر مناسب. أنصح الجميع بالتجربة! ⭐⭐⭐⭐⭐",
  },
  {
    name: "سارة محمود",
    review: "تجربة تسوق مذهلة، أشعر بالأمان عند شراء مستلزمات طفلي من هنا! 👏",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>🌟 ماذا يقول عملاؤنا؟</h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <p>"{item.review}"</p>
            <h4>— {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
