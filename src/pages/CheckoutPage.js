import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/CheckoutPage.css";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [receiptImage, setReceiptImage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("vodafoneCash");
  const [address, setAddress] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setReceiptImage(URL.createObjectURL(file));
  };

  const handleCheckout = () => {
    if (!address) {
      alert("🚨 يرجى إدخال عنوانك قبل تأكيد الطلب!");
      return;
    }

    const newOrder = {
      cartItems: cart,
      paymentMethod: paymentMethod,
      address: address,
      receiptImage: receiptImage,
      status: "قيد المراجعة",
    };

    console.log("🚀 تم تسجيل الطلب بنجاح:", newOrder);
    alert("✅ تم استلام طلبك! سيتم مراجعته قريبًا.");
    setOrderPlaced(false);
    setPaymentMethod("vodafoneCash");
    setAddress("");
    setReceiptImage(null);
  };

  return (
    <div className="checkout-container">
      <h2>💰 الدفع عبر Vodafone Cash أو نقدًا عند الاستلام</h2>
      <p>
        🔹 قم بتحويل المبلغ إلى الرقم <strong>01033189192</strong> أو اختر الدفع
        عند الاستلام.
      </p>

      <label>
        <input
          type="radio"
          name="payment"
          value="vodafoneCash"
          checked={paymentMethod === "vodafoneCash"}
          onChange={() => setPaymentMethod("vodafoneCash")}
        />
        الدفع عبر Vodafone Cash
      </label>

      <label>
        <input
          type="radio"
          name="payment"
          value="cashOnDelivery"
          checked={paymentMethod === "cashOnDelivery"}
          onChange={() => setPaymentMethod("cashOnDelivery")}
        />
        الدفع نقدًا عند الاستلام
      </label>

      {paymentMethod === "vodafoneCash" && (
        <>
          <p>📸 قم برفع سكرين شوت يثبت عملية الدفع</p>
          <button
            className="upload-button"
            onClick={() => document.getElementById("fileInput").click()}
          >
            🖼️ اختر صورة الدفع
          </button>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }} // 🔹 هذا يخفي إدخال الملف
            onChange={handleImageUpload}
          />
          {receiptImage && (
            <img
              src={receiptImage}
              alt="إيصال الدفع"
              className="receipt-preview"
            />
          )}
        </>
      )}

      <p>📍 أدخل عنوانك لتوصيل الطلب</p>
      <input
        type="text"
        placeholder="أدخل عنوانك هنا..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {!orderPlaced ? (
        <button className="confirm-button" onClick={handleCheckout}>
          ✅ تأكيد الطلب
        </button>
      ) : (
        <p>✅ تم تأكيد الطلب! سيتم إرسال تفاصيل الدفع.</p>
      )}
    </div>
  );
};

export default CheckoutPage;
