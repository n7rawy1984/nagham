import React, { useState } from "react";

const PaymentButton = () => {
  const vodafoneCashNumber = "01033189192";
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handlePayment = () => {
    alert("🔔 تم استلام طلب الدفع! سيتم مراجعته قريبًا.");
    setPaymentConfirmed(true);
  };

  return (
    <div className="payment-section">
      <h2>💰 الدفع عبر Vodafone Cash</h2>
      <p>
        🔹 قم بتحويل المبلغ إلى الرقم <strong>{vodafoneCashNumber}</strong>.
      </p>

      {!paymentConfirmed ? (
        <button className="confirm-button" onClick={handlePayment}>
          ✅ تأكيد الدفع
        </button>
      ) : (
        <p>✅ تم تأكيد الدفع! سيتم مراجعة طلبك قريبًا.</p>
      )}
    </div>
  );
};

export default PaymentButton;
