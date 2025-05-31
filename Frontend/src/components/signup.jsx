import { useState } from "react";
import "../CSS/login.css";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import Ayur from "../assets/logp.jpg";
import { Link } from "react-router-dom";
import MainNav from "./mainnav";
import Footer from "./Footer/Footer";
import Sidebar from "./Home/sidebar";
import Sidebar1 from "./Home/sidebar1";
import ErrorPopup from "./ErrorPopup";
import { Navigate } from "react-router";
import LoadingAnimation from "./LoadingAnimation";

export default function SignUp() {
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobileNumber: "",
  });

  const [popupMessage, setPopupMessage] = useState("");

  const validate = () => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|icloud\.com|protonmail\.com|hotmail\.com)$/i;
    const phoneRegex = /^\d{10}$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      setPopupMessage("Please enter a valid email address.");
      return false;
    }

    if (!formData.password || formData.password.length < 6) {
      setPopupMessage("Password must be at least 6 characters.");
      return false;
    }

    if (!formData.mobileNumber || !phoneRegex.test(formData.mobileNumber)) {
      setPopupMessage("Please enter a valid 10-digit mobile number.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/v1/users/userregister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.success) {
        setPopupMessage(result.message);
        setTimeout(() => setRedirect(true), 2000);
      } else {
        setPopupMessage(result.message);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      setPopupMessage("Network error or server not responding.");
    } finally {
      setIsLoading(false);
    }
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {isLoading ? (
        <LoadingAnimation></LoadingAnimation>
      ) : (
        <>
          {isSidebarOpen && <Sidebar1 onClose={handleCloseSidebar} />}
          <Sidebar onOpenSidebar={handleOpenSidebar} />
          <Navbar></Navbar>
          <Navbar2></Navbar2>
          <MainNav></MainNav>
          <div className="log">
            <div className="imgsec">
              <img src={Ayur} alt="Yajveer" />
            </div>
            <div className="logform ">
              <div className="mainlog">
                <div className="wel">
                  <p className="logn">Register Here</p>
                  <p>Welcome to Yajveer!</p>
                  <p> Please Register your account</p>
                </div>
                <div className="field">
                  <form action="" className="logf" onSubmit={handleSubmit}>
                    <div className="usn">
                      <label htmlFor="email">Email : </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="usp">
                      <label htmlFor="password">Password : </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Your Password"
                        value={formData.password}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="usm">
                      <label htmlFor="PhoneNo">Mobile No : </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="Enter Your Mobile No"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <button>Sign Up</button>
                  </form>

                  <div className="newus">
                    <p className="ne">Already Have Account ? </p>
                    <Link to="/login">
                      <p className="ne1">Login</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
          <ErrorPopup
            message={popupMessage}
            onClose={() => setPopupMessage("")}
          />
        </>
      )}
    </>
  );
}
