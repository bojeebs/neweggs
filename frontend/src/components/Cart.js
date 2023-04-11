import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ isAuthenticated,toggleAuthenticated }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('https://newegg.onrender.com/cart/', {
      headers: {
        Authorization: `JWT ${localStorage.getItem('access_token')}`
      }
    })
    .then(response => {
      console.log(response.data);
      setCartItems(response.data.cart_items);
    })
    .catch(error => console.error(error));
  }, [isAuthenticated])

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.product_name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;




