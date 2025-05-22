import "../CSS/Footer.css";
import Logo from "../assets/Yajveer.png";
import { Link } from "react-router";
export default function Footer() {
  return (
    <>
      <div className="mf">
        <div className="info deep-inner-button1">
          <div className="info1">
            <div className="i1">
              <img src={Logo} alt="" className="logo" />
            </div>
            <div className="i2">
              <p className="ab">
                At Yajveer, we blend ayurvedic tradition with modern purity to
                support a healthier, balanced life.
              </p>
            </div>
            <div className="i3">
              <div className="ro">
                <Link>
                  <i className="bi bi-envelope-fill me-2"></i>
                </Link>
              </div>
              <Link>
                <p>yajveer@gmail.com</p>
              </Link>
            </div>
            <div className="i4">
              <div className="ro">
                <Link>
                  <i className="bi bi-telephone-fill me-2"></i>
                </Link>
              </div>
              <Link>
                <p>+91 97253 50333</p>
              </Link>
            </div>
            <div className="i5">
              <div className="ro">
                <Link>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                </Link>
              </div>
              <Link><p>146 , M.G Dreams Complex , Kamrej</p></Link>
            </div>
          </div>

          <div className="info2">
            <div className="cs">
              <p className="hp">Customer Support</p>
              <Link>
                <p className="comp"><i className="bi bi-headset fs-4"></i>  Call Center</p>
              </Link>
              <Link>
                <p className="comp"><i className="bi bi-chat-dots fs-4"></i> Live Chat</p>
              </Link>
              <Link>
                <p className="comp"><i className="bi bi-file-earmark-text fs-4"></i> Policies </p>
              </Link>
              <Link>
                <p className="comp"><i className="bi bi-exclamation-circle fs-4"></i> Report Query</p>
              </Link>
              <Link to="/faq">
                <p className="comp"><i className="bi bi-question-circle fs-4"></i> FAQs </p>
              </Link>
            </div>
            <div className="myac">
              <p className="hp">My Account</p>
              <Link to="/login">
                <p className="comp"><i className="bi bi-person-circle fs-4"></i>  My Account</p>
              </Link>
              <Link>
                <p className="comp"><i className="bi bi-clock-history fs-4"></i> Order History</p>
              </Link>
              <Link>
                <p className="comp"><i className="bi bi-cart fs-4"></i> Shoping Cart</p>
              </Link>
              <Link>
                <p className="comp"><i className="bi bi-ticket-perforated fs-4"></i> Help Ticket</p>
              </Link>
              <Link>
                <p className="comp"><i className="bi bi-heart fs-4"></i> Wishlist</p>
              </Link>
            </div>
            <div className="allc">
              <p className="hp">All Category</p>
              <Link>
                <p className="comp">Karela Powder</p>
              </Link>
              <Link>
                <p className="comp">Jamun Powder</p>
              </Link>
              <Link>
                <p className="comp">Mix Powder</p>
              </Link>
              <Link>
                <p className="comp">Moringa Powder</p>
              </Link>
              <Link>
                <p className="comp">Diabtes Special</p>
              </Link>
              <Link>
                <p className="comp">B12 Powder</p>
              </Link>
            </div>
            <div className="socn">
              <p className="hp">Social Network</p>
               <Link>
              <div className="fac comp1">
                <div className="ico">
                  <i className="bi bi-facebook fs-4"></i>
                </div>
                <p>Facebook</p>
              </div>
              </Link>
              <Link>
              <div className="insta comp1">
                <div className="ico">
                  <i className="bi bi-instagram fs-4"></i>
                </div>
                <p>Instagram</p>
              </div>
              </Link>
              <Link>
              <div className="linkdin comp1">
                <div className="ico">
                  <i className="bi bi-linkedin fs-4"></i>
                </div>
                <p>LinkedIn</p>
              </div>
            </Link>
            </div>
          </div>
        </div>

        <div className="rights">
          <p>Copyright 2025 ©Yajveer. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
