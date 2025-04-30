<<<<<<< HEAD
import React, { useContext, useState, useCallback } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from "../../Context/StoreContext"
import { toast } from 'react-toastify';

const FoodItem = ({ image, name, price, desc, id }) => {
    const [itemCount, setItemCount] = useState(0);
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { cartItems, addToCart, removeFromCart, currency } = useContext(StoreContext);

    const handleImageError = useCallback(() => {
        setImageError(true);
        setIsLoading(false);
        console.error('Failed to load image:', image);
    }, [image]);

    const handleImageLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    const handleAddToCart = async () => {
        try {
            await addToCart(id);
            toast.success(`${name} added to cart!`);
        } catch (error) {
            console.error('Error adding to cart:', error);
            toast.error('Failed to add item to cart. Please try again.');
        }
    };

    const handleRemoveFromCart = async () => {
        try {
            await removeFromCart(id);
            toast.info(`${name} removed from cart`);
        } catch (error) {
            console.error('Error removing from cart:', error);
            toast.error('Failed to remove item from cart. Please try again.');
        }
    };

    return (
        <div className='food-item' role="article" aria-label={`Food item: ${name}`}>
            <div className='food-item-img-container'>
                {isLoading && (
                    <div className='food-item-image-loading'>
                        <div className="loading-spinner"></div>
                    </div>
                )}
                {imageError ? (
                    <div className='food-item-image-placeholder' role="img" aria-label={`Placeholder for ${name}`}>
                        <img src={assets.logo} alt={`Placeholder for ${name}`} />
                    </div>
                ) : (
                    <img 
                        className='food-item-image' 
                        src={image} 
                        alt={name}
                        onError={handleImageError}
                        onLoad={handleImageLoad}
                        loading="lazy"
                    />
                )}
                <div className="food-item-actions">
                    {!cartItems[id] ? (
                        <button 
                            className='add-to-cart-button'
                            onClick={handleAddToCart}
                            aria-label={`Add ${name} to cart`}
                        >
                            <img 
                                src={assets.add_icon_white} 
                                alt="Add to cart" 
                            />
                        </button>
                    ) : (
                        <div className="food-item-counter" role="group" aria-label={`Quantity controls for ${name}`}>
                            <button 
                                onClick={handleRemoveFromCart}
                                aria-label={`Remove one ${name} from cart`}
                            >
                                <img 
                                    src={assets.remove_icon_red} 
                                    alt="Remove item" 
                                />
                            </button>
                            <span aria-label={`Current quantity: ${cartItems[id]}`}>{cartItems[id]}</span>
                            <button 
                                onClick={handleAddToCart}
                                aria-label={`Add one more ${name} to cart`}
                            >
                                <img 
                                    src={assets.add_icon_green} 
                                    alt="Add more" 
                                />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <h3>{name}</h3>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price" aria-label={`Price: ${currency}${price}`}>
                    {currency}{price}
                </p>
            </div>
        </div>
    );
}

export default FoodItem;
=======
import React, { useContext, useState } from 'react'
import './FoodItem.css'
import assets from '../../assets/assets';
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
>>>>>>> 654e5f637d09ea247cc9544d678011ed88cca846
