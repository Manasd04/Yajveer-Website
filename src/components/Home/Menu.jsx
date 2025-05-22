import { useEffect, useRef } from "react";
import { Link } from "react-router";
import "../../CSS/Home/Menu.css";
import product1 from '../../assets/PNG/Karela1.png';
import product4 from '../../assets/PNG/Moringa1.png';
import product3 from "../../assets/PNG/KJP1.png";
import product2 from "../../assets/PNG/Jamun1.png";
import product5 from "../../assets/PNG/B121.png";
import product6 from "../../assets/PNG/YajveerDuuby.png";
export default function Menu(){
const products = [
  {
    productID : 6 ,
    name: "Diabetes Powder",
    imageUrl: product6,
    price: 120,
    discount : 7
  },
  {
    productID : 1 ,
    name: "Karel Powder",
    imageUrl: product1,
    price: 150,
    discount : 2
  },
  {
    productID : 2,
    name: "Jamun Powder",
    imageUrl: product2,
    price: 200,
    discount : 4
  },
  {
    productID : 3,
    name: "Karela & Jamun Powder",
    imageUrl: product3,
    price: 180,
    discount : 5
  },
  {
    productID : 4,
    name: "Moringa Powder",
    imageUrl: product4,
    price: 130,
    discount : 6
  },
  {
     productID : 5 ,
     name : "B12 Powder",
     imageUrl : product5 ,
     price : 100 ,
     discount : 4
  }
];


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
                            <div className="Menucard" key={product.productID}>
                              <Link to={`/product/${product.productID}`}>
                                  <div className="menui">
                                     <img src={product.imageUrl} alt={product.name} className="ig"/>
                                  </div>
                                  </Link>
                                  <div className="pname">
                                       <p>{product.name}</p>
                                  </div>
                                  <div className="pprice">
                                    <p className="dis">{product.discount}%OFF</p>
                                    <p className="dsp">₹{product.price}</p>
                                    <p className="acp">₹{product.price + (product.discount)*(product.price)}</p>
                                  </div>
                                   <Link to={`/product/${product.productID}`}>
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