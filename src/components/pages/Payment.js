import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePayment = () => {
   
    console.log("Processing payment...");

   
    setTimeout(() => {
      setPaymentConfirmed(true);
    }, 2000); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 mt-0">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        {paymentConfirmed ? (
          <div>
          <h1 className="text-green-500 text-center text-2xl font-extrabold">
            Payment Successful!
          </h1>
          <h1 className="text-green-500 text-center font-bold">
            Your order will be delivered wihtin 30 minutes!
          </h1>
          </div>
        ) : (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Card Number
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="**** **** **** ****"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
                <label className="block text-sm font-medium text-gray-600">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-sm font-medium text-gray-600">
                  CVV
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="***"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />
              </div>
            </div>
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              onClick={() => {
                handlePayment();
                handleClearCart();
              }}
            >
              Pay Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentGateway;
