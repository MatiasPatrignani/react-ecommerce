import React, { createContext, useEffect, useState } from "react";
export const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const AuthInitialState = JSON.parse(localStorage.getItem("isLoggedIn"));
  const PaymentInitialInfo = JSON.parse(localStorage.getItem("paymentInfo")) || [] ;

  console.log(PaymentInitialInfo)

  // State from Cart Modal
  const [myCartContext, setItemsContext] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );

  console.log(AuthInitialState)
  const [isLoggedIn, setIsLoggedIn] = useState(AuthInitialState);
  const [paymentInfo, setPaymentInfo] = useState(PaymentInitialInfo);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(()=> {
    localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo))
  }, [paymentInfo])

  return (
    <ShoppingContext.Provider
      value={{ myCartContext, setItemsContext, isLoggedIn, setIsLoggedIn, paymentInfo, setPaymentInfo }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
