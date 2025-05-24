// import { useState, useEffect } from 'react';
// import '../../CSS/Home/ClientReview.css';

// const reviews = [
//   {
//     name: 'Ramesh Patel',
//     image: 'https://i.pravatar.cc/100?img=1',
//     text: 'Using Yajveer’s diabetes powder has helped control my sugar levels naturally.',
//     rating: 5
//   },
//   {
//     name: 'Neha Sharma',
//     image: 'https://i.pravatar.cc/100?img=2',
//     text: 'The Karela Jamun mix works wonders. I feel more energetic and fresh!',
//     rating: 4
//   },
//   {
//     name: 'Jignesh Bhatt',
//     image: 'https://i.pravatar.cc/100?img=3',
//     text: 'I highly recommend the Moringa powder. Great quality and results.',
//     rating: 5
//   },
//   {
//     name: 'Anita Desai',
//     image: 'https://i.pravatar.cc/100?img=4',
//     text: 'Their herbal teas are amazing! I feel refreshed and balanced every morning.',
//     rating: 4
//   },
//   {
//     name: 'Rajesh Mehta',
//     image: 'https://i.pravatar.cc/100?img=5',
//     text: 'Yajveer’s joint pain oil worked like magic. I’m more mobile and pain-free!',
//     rating: 5
//   },
//   {
//     name: 'Kavita Joshi',
//     image: 'https://i.pravatar.cc/100?img=6',
//     text: 'The Triphala capsules have improved my digestion significantly.',
//     rating: 4
//   },
//   {
//     name: 'Vikram Singh',
//     image: 'https://i.pravatar.cc/100?img=7',
//     text: 'My sleep quality improved drastically after using their Ashwagandha powder.',
//     rating: 5
//   },
//   {
//     name: 'Pooja Sinha',
//     image: 'https://i.pravatar.cc/100?img=8',
//     text: 'Loved the quality and packaging. Everything feels premium and natural.',
//     rating: 4
//   },
//   {
//     name: 'Suresh Rana',
//     image: 'https://i.pravatar.cc/100?img=9',
//     text: 'I’ve tried many products, but this brand truly delivers what it promises.',
//     rating: 5
//   }
// ];


// const ClientReview = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextReview = () => {
//     setCurrentIndex((prev) => (prev + 1) % reviews.length);
//   };

//   const prevReview = () => {
//     setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextReview();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="reviews-wrapper">
//       <h2 className="reviews-heading">What Our Customers Say</h2>

//       <div className="reviews-slider">
//         <button className="arrow left" onClick={prevReview}>❮</button>

//         <div className="review-card">
//           <img src={reviews[currentIndex].image} alt="User" className="user-image" />
//           <p className="review-text">"{reviews[currentIndex].text}"</p>
//           <h4 className="user-name">{reviews[currentIndex].name}</h4>
//           <div className="user-rating">
//             {'★'.repeat(reviews[currentIndex].rating)}
//             {'☆'.repeat(5 - reviews[currentIndex].rating)}
//           </div>
//         </div>

//         <button className="arrow right" onClick={nextReview}>❯</button>
//       </div>

//       <div className="dots-container">
//         {reviews.map((_, index) => (
//           <span
//             key={index}
//             className={`dot1 ${index === currentIndex ? 'active' : ''}`}
//             onClick={() => setCurrentIndex(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientReview;




import { useState, useEffect } from 'react';
import '../../CSS/Home/ClientReview.css';

const reviews = [
  {
    name: 'Ramesh Patel',
    image: 'https://i.pravatar.cc/100?img=1',
    text: 'Using Yajveer’s diabetes powder has helped control my sugar levels naturally.',
    rating: 5
  },
  {
    name: 'Neha Sharma',
    image: 'https://i.pravatar.cc/100?img=2',
    text: 'The Karela Jamun mix works wonders. I feel more energetic and fresh!',
    rating: 4
  },
  {
    name: 'Jignesh Bhatt',
    image: 'https://i.pravatar.cc/100?img=3',
    text: 'I highly recommend the Moringa powder. Great quality and results.',
    rating: 5
  },
  {
    name: 'Anita Desai',
    image: 'https://i.pravatar.cc/100?img=4',
    text: 'Their herbal teas are amazing! I feel refreshed and balanced every morning.',
    rating: 4
  },
  {
    name: 'Rajesh Mehta',
    image: 'https://i.pravatar.cc/100?img=5',
    text: 'Yajveer’s joint pain oil worked like magic. I’m more mobile and pain-free!',
    rating: 5
  },
  {
    name: 'Kavita Joshi',
    image: 'https://i.pravatar.cc/100?img=6',
    text: 'The Triphala capsules have improved my digestion significantly.',
    rating: 4
  },
  {
    name: 'Vikram Singh',
    image: 'https://i.pravatar.cc/100?img=7',
    text: 'My sleep quality improved drastically after using their Ashwagandha powder.',
    rating: 5
  },
  {
    name: 'Pooja Sinha',
    image: 'https://i.pravatar.cc/100?img=8',
    text: 'Loved the quality and packaging. Everything feels premium and natural.',
    rating: 4
  },
  {
    name: 'Suresh Rana',
    image: 'https://i.pravatar.cc/100?img=9',
    text: 'I’ve tried many products, but this brand truly delivers what it promises.',
    rating: 5
  }
];

const ClientReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextReviews = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % reviews.length);
  };

  const prevReviews = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - itemsPerPage;
      return newIndex < 0 ? reviews.length - itemsPerPage : newIndex;
    });
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerPage);
  if (visibleReviews.length < itemsPerPage) {
    visibleReviews.push(...reviews.slice(0, itemsPerPage - visibleReviews.length));
  }

  return (
    <div className="reviews-wrapper">
      <h2 className="reviews-heading">What Our Customers Say</h2>

      <div className="reviews-slider">
        <button className="arrow left" onClick={prevReviews}>❮</button>

        <div className="review-cards-container">
          {visibleReviews.map((review, idx) => (
            <div className="review-card" key={idx}>
              <img src={review.image} alt="User" className="user-image" />
              <p className="review-text">"{review.text}"</p>
              <h4 className="user-name">{review.name}</h4>
              <div className="user-rating">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextReviews}>❯</button>
      </div>
    </div>
  );
};

export default ClientReview;
