import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CartModal = ({ cart = [], setCart }) => {
  const [show, setShow] = useState(false);
  
  console.log(cart)

  const handleCloseCartModal = () => setShow(false);
  const handleShowCartModal = () => setShow(true);

  const handleDelete = async (id) => {
    try {
      console.log(`Deleting item with id ${id}`);
      const response = await axios.delete(`http://localhost:8000/api/cart/delete/${id}/`);
      console.log(response);
      setCart(cart.filter(item => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrement = async (id) => {
    console.log('handleIncrement called with id:', id);
    try {
      const existingItem = cart.find(item => item.id === id);
      console.log('existingItem:', existingItem);
      if (existingItem) {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  
        console.log('Sending PUT request with data:', {
          user_id: existingItem.user_id,
          product: existingItem.product,
          product_id: existingItem.product_id,
          quantity: existingItem.quantity + 1
        });
        await axios.put(`http://localhost:8000/api/cart/update/${id}/`, {
          user_id: 1,
          product: existingItem.product,
          product_id: existingItem.product_id,
          quantity: existingItem.quantity + 1
        });
      }
    } catch (error) {
      console.error('Error incrementing cart item:', error);
    }
  };

  return (
    <>
      <div className="absolute top-0 right-0 mt-5 mr-5">
        <Button variant="primary" onClick={handleShowCartModal}>
          Cart
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleCloseCartModal}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((item) => (
            <div key={item.id}>
              <h5 className="text-sm">{item.product_name}</h5>
              <p>{item.product_description}</p>
              <p>Quantity: {item.quantity}</p>
              <Button variant="success" onClick={() => handleIncrement(item.id)}>+</Button>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>Remove</Button>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartModal;

