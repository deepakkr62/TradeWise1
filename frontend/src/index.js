import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//import HomePage from "./Landing_page/Home/HomePage";

import HomePage from "./Landing_Page/Home/HomePage";
import Signup from "./Landing_Page/Signup/Signup";
// import AboutPage from "./Landing_page/About/AboutPage";
import AboutPage from "./Landing_Page/About/AboutPage";
//import ProductPage from "./Landing_page/Products/ProductsPage";
// import ProductPage from "./Landing_Page/Products/ProductPage";

import ProductPage from "./Landing_Page/Products/ProductPage";
// import PricingPage from "./Landing_page/Pricing/PricingPage";
//import PricingPage from "./Landing_Page/Pricing/PricingPage";

import PricingPage from "./Landing_Page/Pricing/PricingPage";
import SupportPage from "./Landing_Page/Support/SupportPage"
// import NotFound from "./Landing_page/NotFound";
import NotFound from "./Landing_Page/NotFound"
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import Login from "./Landing_Page/Signup/Login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);










// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import HomePage from './Landing_Page/Home/HomePage';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//       <HomePage />
    
    
//   </React.StrictMode>
// );

