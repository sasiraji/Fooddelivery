import React, { useContext } from 'react'
import './FoodItem.css'
import { assets, getImageWithFallback } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image, rating }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={getImageWithFallback(image)} alt={name} className="food-item-image" />
                <div className="food-item-rating">
                    <img src={assets.rating_starts} alt="rating" />
                    <span>{rating || "4.5"}</span>
                </div>
            </div>
            <div className="food-item-info">
                <div className="food-item-name-price">
                    <h3>{name}</h3>
                    <p className="food-item-price">${price}</p>
                </div>
                <p className="food-item-description">{description}</p>
                <div className="food-item-counter">
                    {!cartItems[id] ? (
                        <button className="add-to-cart" onClick={() => addToCart(id)}>
                            <img src={assets.add_icon_white} alt="add" />
                            Add to Cart
                        </button>
                    ) : (
                        <div className="cart-counter">
                            <button className="counter-btn" onClick={() => removeFromCart(id)}>
                                <img src={assets.remove_icon_red} alt="remove" />
                            </button>
                            <span>{cartItems[id]}</span>
                            <button className="counter-btn" onClick={() => addToCart(id)}>
                                <img src={assets.add_icon_green} alt="add" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FoodItem
