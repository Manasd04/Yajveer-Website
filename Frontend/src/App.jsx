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

export default App