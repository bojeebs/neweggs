import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartModal from './CartModal';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';

export default function Header({ isAuthenticated, toggleAuthenticated,  }) {
  
  const [show, setShow] = useState(false);
  
  const handleShowCartModal = () => {
    setShow(false);
  };

  const handleCloseCartModal = () => {
    setShow(true);
  };


  return (
    <div className="header-container">
      <div className="flex justify-end items-center">
        <div className="ml-auto">
          <Link to="/">Create Account</Link>
        </div>
        <div className="hidden md:block">
          {isAuthenticated ? (
            <>
              <Link to="/">Home</Link> 
              <Link to="/logout" onClick={toggleAuthenticated}>Logout</Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        <Link to="/products">Products</Link>
      </div>
      <Link to="/home">
        <img src="https://c1.neweggimages.com/WebResource/Themes/Nest/logos/Newegg_full_color_logo_RGB.SVG" class="w-100 h-20" />
      </Link>
       <CartModal show={show}handleCloseCartModal={handleCloseCartModal} />
    </div>
  );
};





 // const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     if (localStorage.getItem('access_token') !== null) {
  //       setIsAuth(true);
  //     } else {
  //       setIsAuth(false);
  //     }
  //   };

  //   window.addEventListener('storage', handleStorageChange);

   
  //   return () => window.removeEventListener('storage', handleStorageChange);
  // }, []);