import React from "react";
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Shops from './Components/Shops/Shops';
import Partnership from './Components/Partnership/Partnership';
import Contact from './Components/Contact/Contact';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import LoginPage from './Components/LoginPage/LoginPage';
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";
import Home from "./Components/Home/Home";
import LayoutPayment from "./Components/LayoutPayment/LayoutPayment";
import ThankYouPage from "./Components/ThankYouPage/ThankYouPage";


const RouterPath = ({addWishList, addProduct, RemoveItem, setItems}) => {
  return (
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/" element={<Home addWishList={addWishList} addProduct={addProduct}/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/checkout" element={<CheckoutPage RemoveItem={RemoveItem} setItems={setItems}/>} />
        <Route path="/payment" element={<LayoutPayment RemoveItem={RemoveItem} setItems={setItems}/>} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
  );
};

export default RouterPath;
