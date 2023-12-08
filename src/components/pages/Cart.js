import React, { useState } from "react";
import { useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import {clearPrice} from "../../utils/priceSlice";
import CartItemList from "./CartItemList";
import { useDispatch } from "react-redux";
import Payment from "./Payment";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const price = useSelector((store)=>store.p.price);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false); 
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(clearPrice());
  };

  // console.log(price);
  const handleProceedToPay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPayment(true); 
    }, 2000); 
  };

  
    const backgroundImageStyle = {
      backgroundImage: cartItems.length === 0 ?
        "url('https://img.freepik.com/free-vector/hand-drawn-asian-food-sale-banner-template_23-2150057614.jpg?w=1480&t=st=1702045686~exp=1702046286~hmac=9e96eb7161bb14a4af8eac66ffcf6209eeb8f2791fb9605e40f8b8065ac1ca1c')" : 'none',
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

  


  return (
    <div className="text-center p-4 h-[84.7vh]" style={backgroundImageStyle}>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          {
            cartItems.length > 0 ? (<h1>Clear Cart</h1>) : (<NavLink to="/home" className="text-white font-bold text-3xl">Check the Restaurant</NavLink>)
          }
          
        </button>
        {cartItems?.length === 0 && (
          <h1 className="font-extrabold">Cart is empty. Add items to the cart!</h1>
        )}
        {cartItems?.length > 0 && !isProcessing && !showPayment && (
          <>

            <button
              className="p-2 m-2 bg-green-500 text-white rounded-lg"
              onClick={handleProceedToPay}
            >
             {`${price} ₹`} Proceed to Pay
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
