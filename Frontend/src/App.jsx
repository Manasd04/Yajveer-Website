import React from 'react'
import reactDom from "react-dom/client";
import Login from './components/login';
import { Routes, Route } from 'react-router';
import Home from './components/home';
import SignUp from './components/signup';
import ReviewForm from './components/ReviewForm';
import ProductDetails from './components/ProductDetails';
import FAQ from './components/Footer/FAQ';
import ContactUs from './components/Footer/ContactUs';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsConditions';
import ShippingPolicy from './components/ShippingPolices';

const App = () => {
  return (
        <>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            <Route path="/reviewForm" element={<ReviewForm></ReviewForm>}></Route>
            <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
            <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="/faq" element={<FAQ></FAQ>}></Route>
            <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
            <Route path="/privacy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
            <Route path="/terms" element={<TermsAndConditions></TermsAndConditions>}></Route>
            <Route path="/shipping" element={<ShippingPolicy></ShippingPolicy>}></Route>
        </Routes>
        </>
    )
}

export default App