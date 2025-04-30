import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Cart = () => {
    const { cartItems, food_list, removeFromCart, addToCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext)
    const navigate = useNavigate()

    return (
        <div className='cart-container'>
            <div className="cart-wrapper">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item.id.toString()] > 0) {
                        return (
                            <div key={index}>
                                <div className="cart-items-item">
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>{currency}{item.price}</p>
                                    <div className="cart-quantity-controls">
                                        <button onClick={() => removeFromCart(item.id.toString())}>-</button>
                                        <span>{cartItems[item.id.toString()]}</span>
                                        <button onClick={() => addToCart(item.id.toString())}>+</button>
                                    </div>
                                    <p>{currency}{(item.price * cartItems[item.id.toString()]).toFixed(2)}</p>
                                    <img className='cart-items-remove-icon' onClick={() => {
                                        // Remove all quantities of this item
                                        for(let i = 0; i < cartItems[item.id.toString()]; i++) {
                                            removeFromCart(item.id.toString());
                                        }
                                    }} src={assets.remove_icon_red} alt="" />
                                </div>
                                <hr />
                            </div>
                        )
                    }
                    return null;
                })}
                <div className="cart-bottom">
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>{currency}{getTotalCartAmount().toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>{currency}{getTotalCartAmount() === 0 ? 0 : (getTotalCartAmount() + deliveryCharge).toFixed(2)}</b>
                            </div>
                        </div>
                        <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cart-promocode">
                        <div>
                            <p>If you have a promo code, Enter it here</p>
                            <div className='cart-promocode-input'>
                                <input type="text" placeholder='promo code' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
