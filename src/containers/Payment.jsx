import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button";
import AppContext from "../context/AppContext";
import { handleSumTotal } from "../utils/index";

import "../styles/components/Payment.css";

function Payment() {
  const history = useHistory();
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const paypalOptions = {
   
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumend del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{`$ ${item.price}`}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => {}}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={() => {}}
            onPaymentCancel={() => {}}
          />
        </div>
      </div>
      <div>Sidebard</div>
    </div>
  );
}

export default Payment;
