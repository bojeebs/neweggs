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
            <Button variant="danger" onClick={() => handleDelete(item.id)}>Remove</Button>
          </div>
        ))}
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartModal;
