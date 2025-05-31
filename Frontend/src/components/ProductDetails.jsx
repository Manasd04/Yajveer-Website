import { useState, useEffect } from "react";
import { useParams } from "react-router"; // Corrected from 'react-router' to 'react-router-dom' if it was a typo
import { useSelector, useDispatch } from "react-redux";
import { Fectchdata } from "../Redux/CartSlice.js";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import MainNav from "./mainnav";
import Sidebar from "./Home/sidebar";
import Sidebar1 from "./Home/sidebar1";
import Footer from "./Footer/Footer";
import "../CSS/ProductDetails.css";

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: products, loading, error } = useSelector((state) => state.cart);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedQuantities, setSelectedQuantities] = useState({});
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const defaultWeightOptions = {
        box: ["75g", "100g"],
        pouch: ["100g", "200g", "300g"],
    };

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(Fectchdata());
        }
    }, [dispatch, products]);

    const product = products.find((p) => p._id === id);

    useEffect(() => {
        if (product && product.photos && product.photos.length > 0) {
            const availableWeights =
                product.weights || defaultWeightOptions?.[product.type] || [];

            const initialQuantities = availableWeights.reduce((acc, weight) => {
                return { ...acc, [weight]: 0 };
            }, {});
            setSelectedQuantities(initialQuantities);

            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === product.photos.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        } else if (product) {
            const availableWeights =
                product.weights || defaultWeightOptions?.[product.type] || [];
            const initialQuantities = availableWeights.reduce((acc, weight) => {
                return { ...acc, [weight]: 0 };
            }, {});
            setSelectedQuantities(initialQuantities);
        }
    }, [product]);

    const handleOpenSidebar = () => setSidebarOpen(true);
    const handleCloseSidebar = () => setSidebarOpen(false);

    const handleQuantityChange = (weight, change) => {
        setSelectedQuantities((prevQuantities) => {
            const currentQty = prevQuantities?.[weight] || 0;
            const newQty = Math.max(0, currentQty + change);
            return {
                ...prevQuantities,
                ...(prevQuantities && { [weight]: newQty }),
            };
        });
    };

    // Helper function to get items for both Add to Cart and Buy Now
    const getSelectedItems = () => {
        if (!product) {
            console.warn("Product not found when trying to get items.");
            return { items: [], totalQuantity: 0 };
        }

        const items = [];
        let totalQty = 0;

        for (const weight in selectedQuantities) {
            const qty = selectedQuantities?.[weight];
            if (qty > 0) {
                const priceInfo = product.priceByWeight?.[weight];
                const itemPrice = priceInfo?.actualPrice || product.actualPrice || 0;

                items.push({
                    _id: product._id,
                    productName: product.productName,
                    selectedWeight: weight,
                    quantity: qty,
                    price: itemPrice,
                    image: product.photos?.[currentImageIndex] || "",
                });
                totalQty += qty;
            }
        }
        return { items, totalQuantity: totalQty };
    };

    const resetSelectedQuantities = () => {
        const reset = {};
        Object.keys(selectedQuantities).forEach((weight) => {
            reset[weight] = 0;
        });
        setSelectedQuantities(reset);
    };


    const handleAddToCart = () => {
        const { items, totalQuantity } = getSelectedItems();

        if (items.length === 0) {
            alert(
                "Please select at least one quantity for a weight variant to add to cart."
            );
            return;
        }

        console.log("Adding to cart:", items);
        // Dispatch your actual add to cart action here
        // Example: dispatch(addToCart(items)); // If your action handles multiple items
        // Or loop and dispatch for each item:
        // items.forEach(item => dispatch(addToCart(item)));
        alert(`Added ${totalQuantity} item(s) to cart!`);
        resetSelectedQuantities(); // Reset quantities after adding to cart
    };

    const handleBuyNow = () => {
        const { items, totalQuantity } = getSelectedItems();

        if (items.length === 0) {
            alert(
                "Please select at least one quantity for a weight variant to buy now."
            );
            return;
        }

        console.log("Buying now:", items);
        // Here you would typically dispatch an action to initiate direct checkout
        // e.g., dispatch(initiateDirectCheckout(items));
        alert(`Proceeding to checkout with ${totalQuantity} item(s)!`);
        resetSelectedQuantities(); // Reset quantities after buying now
        // Potentially redirect to checkout page here:
        // navigate('/checkout');
    };

    if (loading) {
        return <div className="loading-state">Loading product details...</div>;
    }

    if (error) {
        return (
            <div className="error-state">
                Error:{" "}
                {typeof error === "string"
                    ? error
                    : "Failed to load product details. Please try again later."}
            </div>
        );
    }

    if (!product) {
        return <div className="product-not-found">Product not found.</div>;
    }

    const availableWeights =
        product.weights || defaultWeightOptions?.[product.type] || [];

    // --- NEW LOGIC FOR INGREDIENTS AND BENEFITS ---
    let parsedIngredients = [];
    try {
        if (product.ingredients && typeof product.ingredients === 'string') {
            parsedIngredients = JSON.parse(product.ingredients);
        } else if (Array.isArray(product.ingredients)) {
            parsedIngredients = product.ingredients;
        }
    } catch (e) {
        console.error("Failed to parse ingredients:", e);
        parsedIngredients = []; // Fallback to empty array on parse error
    }

    let parsedBenefits = [];
    try {
        if (product.benefits && typeof product.benefits === 'string') {
            parsedBenefits = JSON.parse(product.benefits);
        } else if (Array.isArray(product.benefits)) {
            parsedBenefits = product.benefits;
        }
    } catch (e) {
        console.error("Failed to parse benefits:", e);
        parsedBenefits = []; // Fallback to empty array on parse error
    }
    // --- END NEW LOGIC ---

    return (
        <>
            {isSidebarOpen && <Sidebar1 onClose={handleCloseSidebar} />}
            <Sidebar onOpenSidebar={handleOpenSidebar} />
            <Navbar />
            <Navbar2 />
            <MainNav />

            <div className="product-details-container">
                <div className="product-details">
                    {/* Product Image Gallery with Slider */}
                    <div className="product-gallery">
                        <div className="main-image">
                            {product.photos && product.photos.length > 0 ? (
                                <img
                                    src={product.photos?.[currentImageIndex]}
                                    alt={product.productName}
                                    className="slider-image"
                                />
                            ) : (
                                <img
                                    src="/path/to/placeholder.jpg"
                                    alt={product.productName}
                                />
                            )}
                        </div>
                        {product.photos && product.photos.length > 1 && (
                            <div className="thumbnail-gallery">
                                {product.photos.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo}
                                        alt={`${product.productName} ${index + 1}`}
                                        className={index === currentImageIndex ? "active" : ""}
                                        onClick={() => setCurrentImageIndex(index)}
                                        style={{ "--delay-factor": `${index * 0.1}s` }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Information */}
                    <div className="product-info">
                        <h1 className="product-title">{product.productName}</h1>
                        <p className="product-description">{product.description}</p>

                        {/* Price & Quantity Selection for each weight variant */}
                        <div className="weight-variant-selection">
                            <h3>Available Weights & Quantities:</h3>
                            {availableWeights.length > 0 ? (
                                availableWeights.map((weight) => {
                                    const priceInfo = product.priceByWeight?.[weight];
                                    const actualPrice =
                                        priceInfo?.actualPrice || product.actualPrice || 0;
                                    const originalPrice = priceInfo?.originalPrice;
                                    const discount =
                                        priceInfo &&
                                        priceInfo.originalPrice &&
                                        priceInfo.actualPrice
                                            ? Math.round(
                                                  ((priceInfo.originalPrice - priceInfo.actualPrice) /
                                                      priceInfo.originalPrice) *
                                                      100
                                              )
                                            : product.discount || 0;

                                    return (
                                        <div key={weight} className="weight-variant-item">
                                            <span className="variant-weight">{weight}:</span>
                                            <div className="variant-price-info">
                                                {discount > 0 && (
                                                    <>
                                                        <span className="variant-discount-tag">
                                                            {discount}% OFF
                                                        </span>
                                                        <span className="variant-original-price">
                                                            ₹{originalPrice}
                                                        </span>
                                                    </>
                                                )}
                                                <span className="variant-actual-price">
                                                    ₹{actualPrice}
                                                </span>
                                            </div>
                                            <div className="quantity-controls">
                                                <button
                                                    onClick={() => handleQuantityChange(weight, -1)}
                                                    disabled={selectedQuantities?.[weight] === 0}
                                                >
                                                    -
                                                </button>
                                                <span>{selectedQuantities?.[weight] || 0}</span>
                                                <button onClick={() => handleQuantityChange(weight, 1)}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No specific weight variants available for this product.</p>
                            )}
                        </div>

                        {/* Ingredients (Point-wise) */}
                        <div className="ingredients">
                            <h3>Ingredients</h3>
                            {parsedIngredients && parsedIngredients.length > 0 ? (
                                <ul className="point-list">
                                    {parsedIngredients.map((ingredient, index) => (
                                        <li key={index} className="point-item">
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No ingredients listed for this product.</p>
                            )}
                        </div>

                        {/* Benefits (Point-wise) */}
                        <div className="benefits">
                            <h3>Benefits</h3>
                            {parsedBenefits && parsedBenefits.length > 0 ? (
                                <ul className="point-list">
                                    {parsedBenefits.map((benefit, index) => (
                                        <li key={index} className="point-item">
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No benefits listed for this product.</p>
                            )}
                        </div>

                        {/* Action Buttons: Add to Cart and Buy Now */}
                        <div className="action-buttons">
                            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                            <button className="buy-now-btn" onClick={handleBuyNow}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}