import React from "react";
import { useNavigate } from "react-router-dom";
import PageCheckout from "./PageCheckout";

const CheckoutPage = ({RemoveItem}) => {


  const clickEvent = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
  }



  return (
    <>
      <div className="m-5 pt-4">
          <PageCheckout clickEvent={clickEvent} RemoveItem={RemoveItem}/>
      </div>
    </>
  );
};

export default CheckoutPage;
