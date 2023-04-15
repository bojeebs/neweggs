import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState([]);



  return (
    <div>



      
      
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.product_name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;




