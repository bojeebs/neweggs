import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

const CartModal = ({cart=[]}) => {
  const [show, setShow] = useState(false);


  const handleCloseCartModal = () => setShow(false);
  const handleShowCartModal = () => setShow(true);


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
                <p>{item.description}</p>
    </div>
  ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartModal;


