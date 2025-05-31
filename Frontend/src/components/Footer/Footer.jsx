import "../../CSS/Footer/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1 */}
        <div className="footer-column about">
          <h3>About us</h3>
          <p>
            We take pride in providing high-quality herbal products aimed at
            supporting your health and well-being.
          </p>
          <div className="social-icons">
            <Link to="#">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <i className="bi bi-info-circle"></i>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <i className="bi bi-star"></i>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <i className="bi bi-box-seam"></i>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <i className="bi bi-newspaper"></i>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <i className="bi bi-envelope"></i>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column information">
          <h3>Information</h3>
          <ul>
            <li>
              <Link to="/faq">FAQ's</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/returnpolicy">Refund & Return Policy</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <i className="bi bi-telephone"></i> +91-7405430230
            </li>
            <li>
              <i className="bi bi-envelope"></i> yajveerayurved@gmail.com
            </li>
            <li>
              <i className="bi bi-geo-alt"></i> 146 , M.G Dreams Near
              Bapasitaram chok , Kamrej , 394185
            </li>
            {/* <li>
              <img
                src={footerLogo}
                alt="Footer Logo"
                className="footer-logo"
              />
            </li> */}
          </ul>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="footer-bottom">
        <p>
          Copyright © 2025 Yajveer Ayurvedic Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
