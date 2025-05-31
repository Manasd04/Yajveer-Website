import "../../CSS/Home/sidebar.css";
import Logo from "../../assets/Yajveer.png";
import "../../CSS/font.css";
import { Link } from "react-router-dom";
export default function sidebar({ onOpenSidebar }){
    return(
        <>
            <div className="mn1">
                <div className="threed" onClick={onOpenSidebar}>
                     <div className="threed1">
                              <i className="bi bi-list"></i>
                     </div>
                </div>
                <div className="mn1lo">
                    <img src={Logo} alt="Logo"/>
                    <p style={{fontFamily : 'Constantia'}}>Yajveer Ayurvedic</p>
                </div>
                <div className="mnadd">
                    <Link>
                     <div className="mn1like">
                        <i className="bi bi-cart-plus"></i>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
};