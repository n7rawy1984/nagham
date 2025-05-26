import React, { useState } from "react";

const OrderConfirmation = () => {
  const [confirmationSent, setConfirmationSent] = useState(false);

  return (
    <div className="confirmation">
      <h2>✅ تم إتمام الطلب بنجاح!</h2>
      <p>يرجى إرسال صورة إيصال الدفع إلى خدمة العملاء.</p>

      {!confirmationSent ? (
        <button onClick={() => setConfirmationSent(true)}>تأكيد الدفع</button>
      ) : (
        <p>📩 تم إرسال التأكيد، سيتم مراجعة طلبك قريبًا!</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
