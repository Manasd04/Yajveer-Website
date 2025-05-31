<<<<<<< HEAD
import React from "react";
import reactDom from "react-dom/client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Login from "./components/login";
import { Routes, Route } from "react-router";
import Home from "./components/home";
import SignUp from "./components/signup";
import ReviewForm from "./components/ReviewForm";
import ProductDetails from "./components/ProductDetails";
import FAQ from "./components/Footer/FAQ";
import ContactUs from "./components/Footer/ContactUs";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Returnpolicy from "./components/Footer/returnpolicy";
import TermsAndConditions from "./components/TermsConditions";
import ShippingPolicy from "./components/ShippingPolices";
import LoadingAnimation from "./components/LoadingAnimation";
import { Fectchdata } from "./Redux/CartSlice";
import Forgotpassword from "./components/Forgotpass";
import Forgotpassword1 from "./components/Forgotpass1";
import Forgotpassword2 from "./components/Forgotpass2";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.cart);
=======
import React, {useEffect} from 'react'
import reactDom from "react-dom/client";
import Login from './components/login';
import { Routes, Route } from 'react-router-dom';
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
import { useSelector, useDispatch } from 'react-redux';
import { Fectchdata } from './store/CartSlice';
import LoadingAnimation from './components/LoadingAnimation';


const App = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.cart);
    
    useEffect(() => {
        dispatch(Fectchdata());
    }, [dispatch]);

    if (loading) {
        return <LoadingAnimation />;
    }

    if (error) {
        return (
            <div className="error-container">
                <h2>Error Loading Data</h2>
                <p>{error}</p>
                <button onClick={() => dispatch(Fectchdata())}>Retry</button>
            </div>
        );
    }

    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path="/reviewForm" element={<ReviewForm />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
        </Routes>
        </>
    )
}
>>>>>>> a3a5954af510e7a11f6fe602daa4e225444aeeb4

  useEffect(() => {
    dispatch(Fectchdata());
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error Loading Data</h2>
        <p>{error}</p>
        <button onClick={() => dispatch(Fectchdata())}>Retry</button>
      </div>
    );
  }

  if (data) {
    console.log(data);
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/reviewForm" element={<ReviewForm></ReviewForm>}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/faq" element={<FAQ></FAQ>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route
          path="/privacy"
          element={<PrivacyPolicy></PrivacyPolicy>}
        ></Route>
        <Route
          path="/returnpolicy"
          element={<Returnpolicy></Returnpolicy>}
        ></Route>
        <Route
          path="/terms"
          element={<TermsAndConditions></TermsAndConditions>}
        ></Route>
        <Route
          path="/shipping"
          element={<ShippingPolicy></ShippingPolicy>}
        ></Route>
        <Route path="/forgotpassword" element={<Forgotpassword></Forgotpassword>}></Route>
        <Route path="/forgotpassword1" element={<Forgotpassword1></Forgotpassword1>}></Route>
        <Route path="/forgotpassword2" element={<Forgotpassword2></Forgotpassword2>}></Route>
      </Routes>
    </>
  );
};

export default App;
