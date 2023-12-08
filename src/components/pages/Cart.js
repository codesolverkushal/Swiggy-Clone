import React, { useState } from "react";
import { useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import CartItemList from "./CartItemList";
import { useDispatch } from "react-redux";
import Payment from "./Payment";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false); 
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleProceedToPay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPayment(true); 
    }, 2000); 
  };


  return (
    <div className="text-center m-4 p-4">
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1>Cart is empty. Add items to the cart!</h1>
        )}
        {cartItems?.length > 0 && !isProcessing && !showPayment && (
          <>

            <button
              className="p-2 m-2 bg-green-500 text-white rounded-lg"
              onClick={handleProceedToPay}
            >
              Proceed to Pay
            </button>
            <CartItemList items={cartItems} />

          </>
        )}
        {isProcessing && (
          <p className="text-xl mt-4">Redirecting...</p>
        )}
        {showPayment && <Payment />}
      </div>
     
    </div>
  );
};

export default Cart;
