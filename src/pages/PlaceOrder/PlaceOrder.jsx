import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { foodList } from '../../data/menuData';
import assets from '../../assets/assets';

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems, currency, deliveryCharge } = useContext(StoreContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (getTotalCartAmount() === 0) {
      alert('Your cart is empty.');
    } else {
      // Normally you would handle order saving here
      alert('Order placed successfully!');
      navigate('/myorders');
    }
  };

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <h2>Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <h2>Your Order</h2>
        <div className="place-order-items">
          {foodList.map((item, index) => {
            if (cartItems[item.id] > 0) {
              return (
                <div className="place-order-item" key={index}>
                  <img src={assets[item.image]} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>x {cartItems[item.id]}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <hr />
        <div className="place-order-total">
          <h3>Subtotal: ${getTotalCartAmount()}</h3>
          <h3>Delivery Fee: ${getTotalCartAmount() === 0 ? 0 : deliveryCharge}</h3>
          <h3>Total: ${getTotalCartAmount() === 0 ? 0 : (getTotalCartAmount() + deliveryCharge).toFixed(2)}</h3>
        </div>
        <button onClick={handlePlaceOrder}>PROCEED TO PAYMENT</button>
      </div>
    </div>
  )
}

export default PlaceOrder
