import { useEffect, useRef } from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { Link } from "react-router";
=======
import { Link } from "react-router-dom";
>>>>>>> a3a5954af510e7a11f6fe602daa4e225444aeeb4
import "../../CSS/Home/Menu.css";
export default function Menu(){

const { data: products } = useSelector((state) => state.cart);
console.log(products);

const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        const onWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault(); // prevent vertical scroll
                el.scrollLeft += e.deltaY; // scroll horizontally
            }
        };
        el.addEventListener("wheel", onWheel);

        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    return(
        <>
            <div className="mm">
                <div className="ml"  ref={scrollRef}>
                     {
                        products.map((product) => (
                            <div className="Menucard" key={product._id}>
                              <Link to={`/product/${product._id}`}>
                                  <div className="menui">
                                     <img src={product.photos[0]} alt={product.productName} className="ig"/>
                                  </div>
                                  </Link>
                                  <div className="pname">
                                       <p>{product.productName}</p>
                                  </div>
                                  <div className="pprice">
                                    <p className="dis">{product.discount}%OFF</p>
                                    <p className="dsp">₹{product.actualPrice}</p>
                                    <p className="acp">₹{Math.floor(product.actualPrice + ((product.discount)*(product.actualPrice)/100))}</p>
                                  </div>
                                   <Link to={`/product/${product._id}`}>
                                  <div className="menucart">
                                     <p>Buy Now</p>
                                  </div>
                                  </Link>
                            </div>
                        ))
                     }
                </div>
            </div>
        </>
    )
};