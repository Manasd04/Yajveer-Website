import React from 'react';
import "../../CSS/Home/Marketing.css";
import product1 from '../../assets/benifits1.jpg';
import product4 from '../../assets/benifits2.jpg';
const Marketing = () => {
  return (
     <section className="yajveer-container">
      <div className="yajveer-left">
        <h2 className="yajveer-title">Natural Healing with Yajveer Ayurveda 🌿</h2>
        <p className="yajveer-text">
          At Yajveer, we blend the time-tested knowledge of Ayurveda with modern wellness needs. Our range of herbal products — including <strong>Diabetes Control Powder</strong>, <strong>Moringa</strong>, <strong>Karela</strong>, and <strong>Jamun Mix Powders</strong> — are crafted to help restore your health naturally.
        </p>
        <p className="yajveer-text">
          Backed by purity, tradition, and trust, our formulations support blood sugar regulation, digestion, immunity, and overall vitality — without side effects.
        </p>
        <button className="yajveer-btn">Explore Ayurvedic Products</button>
      </div>

      <div className="yajveer-right">
        <img
          src={product1}
          alt="Diabetes Powder"
          className="yajveer-img"
        />
        <img
          src={product4}
          alt="Karela & Jamun Mix"
          className="yajveer-img"
        />
      </div>
    </section>
  );
};

export default Marketing;
