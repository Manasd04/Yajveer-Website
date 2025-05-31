import "../../CSS/Home/sidebar1.css";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link } from "react-router";
import ErrorPopup from "../ErrorPopup";
import axios from "axios";
import LoadingAnimation from "../LoadingAnimation";

=======
import { Link } from "react-router-dom";
>>>>>>> a3a5954af510e7a11f6fe602daa4e225444aeeb4
export default function Sidebar1({ onClose }) {
  const product = [
    { id: 1, Name: "Diabetes Powder" },
    { id: 2, Name: "Karela Powder" },
    { id: 3, Name: "Jamun Powder" },
    { id: 4, Name: "Karela & Jamun Powder" },
    { id: 5, Name: "Moringa Powder" },
    { id: 6, Name: "B12 Powder" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoginUser") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/v1/users/userlogout`,
        {},
        { withCredentials: true }
      );

      const result = response.data;
      if (result.success) {
        localStorage.setItem("isLoginUser", "false");
        setIsLoggedIn(false);
        setPopupMessage("Logout successful");
      } else {
        setPopupMessage("Logout failed: " + result.message);
      }
    } catch (error) {
      localStorage.setItem("isLoginUser", "true");
      if (error.response?.data?.message) {
        setPopupMessage(error.response.data.message);
      } else {
        setPopupMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <LoadingAnimation />
  ) : (
    <div className="sidebar1-overlay">
      <div className="sidebar1-content">
        <div className="sdclose" onClick={onClose}>
          <i className="bi bi-x-lg closeico"></i>
        </div>
        <div className="sidebar1cont">
          {product.map((item) => (
            <div className="side1con" key={item.id}>
              <Link>
                <div className="itemsName">
                  <p>{item.Name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="contactSection">
          <h3 className="contactHeader">Contact</h3>
          <Link to="tel:+917405430230">
            <div className="contactItem">
              <i className="bi bi-telephone-fill"></i>
              <span>+91 74054 30230</span>
            </div>
          </Link>

          <Link to="mailto:yajveerayurved@gmail.com">
            <div className="contactItem">
              <i className="bi bi-envelope-fill"></i>
              <span>yajveerayurved@gmail.com</span>
            </div>
          </Link>

          <div className="authSection">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="authLink">
                  Login
                </Link>
                <span>/</span>
                <Link to="/signup" className="authLink">
                  Signup
                </Link>
              </>
            ) : (
              <button className="authLink" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      <ErrorPopup message={popupMessage} onClose={() => setPopupMessage("")} />
    </div>
  );
}
