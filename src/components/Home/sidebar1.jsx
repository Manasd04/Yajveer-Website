import "../../CSS/Home/sidebar1.css";
import { Link } from "react-router";
export default function Sidebar1({ onClose }) {
   const product = [
    { id: 1, Name: "Diabetes Powder" },
    { id: 2, Name: "Karela Powder" },
    { id: 3, Name: "Jamun Powder" },
    { id: 4, Name: "Karela & Jamun Powder" },
    { id: 5, Name: "Moringa Powder" },
    { id: 6, Name: "B12 Powder" },
  ];

  return (
    <div className="sidebar1-overlay">
      <div className="sidebar1-content">
        <div className="sdclose" onClick={onClose}>
          <i className="bi bi-x-lg  closeico"></i>
        </div>
        <div className="sidebar1cont">
          {product.map((item) => (
            <div className="side1con" key={item.id}>
              <Link >
                <div className="itemsName">
                  <p>{item.Name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>


        <div className="contactSection">
          <h3 className="contactHeader">Contact</h3>
          <Link>
          <div className="contactItem">
            <i className="bi bi-telephone-fill"></i>
            <span>+91 12345 67890</span>
          </div>
          </Link>

          <Link>
          <div className="contactItem">
            <i className="bi bi-envelope-fill"></i>
            <span>example@email.com</span>
          </div>
        </Link>
          <div className="authSection">
            <Link to="/login" className="authLink">
              Login
            </Link>
            <span>/</span>
            <Link to="/signup" className="authLink">
              Signup
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
}
