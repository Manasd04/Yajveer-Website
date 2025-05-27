import "../CSS/mainNav.css";
import { Link } from "react-router-dom";
export default function MainNav() {
  return (
    <>
      <nav className="mainNav">
        <div className="left">
          <Link to="/products" className="items deep-inner-button">
            <div className="title">
              <p>
                All Category{" "}
                <i
                  className="bi bi-caret-down-fill"
                  style={{ fontSize: "1rem" }}
                ></i>
              </p>
            </div>
            <div className="Menulist">
              <p>Herbal Powder</p>
              <p>Karela powder</p>
            </div>
          </Link>
        </div>

        <div className="mid">
          <Link to='/' className="home deep-inner-button">
            <p>Home</p>
          </Link>
          <Link to="/products" className="dp deep-inner-button">
            <div className="title">
              <p>
                 Powder{" "}
                <i
                  className="bi bi-caret-down-fill"
                  style={{ fontSize: "1rem" }}
                ></i>
              </p>
            </div>
            <div className="Menulist">
              <p>Herbal Powder</p>
              <p>Karela powder</p>
            </div>
          </Link>

          <Link to="/packets" className="pack deep-inner-button">
            <div className="title">
              <p>
                 Packtes{" "}
                <i
                  className="bi bi-caret-down-fill"
                  style={{ fontSize: "1rem" }}
                ></i>
              </p>
            </div>
            <div className="Menulist">
              <p>Herbal Powder</p>
              <p>Karela powder</p>
            </div>
          </Link>
          <Link to="/instructions" className="use deep-inner-button">
            <p>Instructions</p>
          </Link>
          
          <Link to="/reviewForm" className="review deep-inner-button">
            <p>Reviews</p>
          </Link>
        </div>

        <div className="right">
          <Link to="/contact" className="mail deep-inner-button">
            <i className="bi bi-envelope"></i>
            <p>Contact</p>
          </Link>
          <Link to="tel:+917405430230" className="call deep-inner-button">
            <i className="bi bi-telephone"></i>
            <p>Call</p>
          </Link>
        </div>
      </nav>
    </>
  );
}
