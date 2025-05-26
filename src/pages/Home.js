// src/pages/Home.js
import "../styles/Home.css";
import Testimonials from "../components/Testimonials";
import BannerCarousel from "../components/BannerCarousel";
function Home() {
  return (
    <>
      <section className="hero">
        <h1>🎈 مرحبًا بك في نغم لاند – عالم المرح والأناقة للأطفال! 👶</h1>
        <p>اكتشف أفضل الألعاب، الملابس، والمستلزمات بأحدث العروض الحصرية! ✨</p>
        <button className="cta-button">ابدأ التسوق الآن</button>
      </section>
      <BannerCarousel />
      <h2 className="explore-section">
        🛍 "جاهز للانطلاق في مغامرة تسوّق؟ إليك عوالم نغم لاند!" 👕 "هل تبحث عن
        أناقة؟ أو ألعاب؟ أو راحة لطفلك؟ لدينا كل شيء هنا!" 🎈 "اهلا بك في مملكة
        المرح، اختر وجهتك وانطلق!"
      </h2>
      <section className="categories">
        <div className="category-grid">
          <div className="category-card">
            <img src="https://picsum.photos/151" alt="ألعاب الأطفال" />
            <h3>🧸 جاهز للعب؟ اختر مغامرتك الآن!</h3>
            <button className="view-button">انطلق! 🚀</button>
          </div>

          <div className="category-card">
            <img src="https://picsum.photos/152" alt="ملابس الأطفال" />
            <h3>👕 استعد لتألّق صغيرك! اكتشف الأناقة هنا</h3>
            <button className="view-button">✨ كن أنيقًا</button>
          </div>

          <div className="category-card">
            <img src="https://picsum.photos/153" alt="مستلزمات الأطفال" />
            <h3>🍼 الأمان والراحة تبدأ من هنا، لطفلك كل العناية!</h3>
            <button className="view-button">🛡️ اطمئن!</button>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="offers">
        <h2>🔥 العروض الحصرية لهذا الشهر!</h2>
        <p>
          استمتع بأفضل الأسعار والتخفيضات الحصرية على المنتجات المفضلة لديك! 💰
        </p>
        <button className="cta-button">تصفح العروض</button>
      </section>

      <section className="new-products">
        <h2>✨ الأحدث في المتجر</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://source.unsplash.com/200x200/?new-toy"
              alt="لعبة جديدة"
            />
            <h3>🚗 لعبة جديدة للأطفال</h3>
            <p>تجربة ممتعة للصغار!</p>
            <button className="cta-button">تسوق الآن</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
