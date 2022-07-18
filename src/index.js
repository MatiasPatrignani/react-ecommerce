import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Shops from './Components/Shops/Shops';
import Partnership from './Components/Partnership/Partnership';
import Contact from './Components/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/AboutUs' element={<AboutUs/>} />
    <Route path='/Shops' element={<Shops/>} />
    <Route path='/Partnership' element={<Partnership/>} />
    <Route path='/Contact' element={<Contact/>} />
  </Routes>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
