import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from "../../Context/StoreContext"

const FoodItem = ({ image, name, price, desc, id }) => {
    const [itemCount, setItemCount] = useState(0);
    const [imageError, setImageError] = useState(false);
    const { cartItems, addToCart, removeFromCart, currency } = useContext(StoreContext);

    const handleImageError = () => {
        setImageError(true);
        console.error('Failed to load image:', image);
    };

    const handleAddToCart = () => {
        try {
            addToCart(id);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const handleRemoveFromCart = () => {
        try {
            removeFromCart(id);
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                {imageError ? (
                    <div className='food-item-image-placeholder'>
                        <img src={assets.logo} alt="Placeholder" />
                    </div>
                ) : (
                    <img 
                        className='food-item-image' 
                        src={image} 
                        alt={name}
                        onError={handleImageError}
                    />
                )}
                <div className="food-item-actions">
                    {!cartItems[id] ? (
                        <img 
                            className='add' 
                            onClick={handleAddToCart} 
                            src={assets.add_icon_white} 
                            alt="Add to cart" 
                        />
                    ) : (
                        <div className="food-item-counter">
                            <img 
                                src={assets.remove_icon_red} 
                                onClick={handleRemoveFromCart} 
                                alt="Remove item" 
                            />
                            <p>{cartItems[id]}</p>
                            <img 
                                src={assets.add_icon_green} 
                                onClick={handleAddToCart} 
                                alt="Add more" 
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">{currency}{price}</p>
            </div>
        </div>
    );
}

export default FoodItem;
