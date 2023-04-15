import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartModal from './CartModal';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  
  const [show, setShow] = useState(false);
  
  

  


  return (
    <div className="header-container">
      <div className="flex justify-end items-center">
        <div className="ml-auto">
        </div>
        <div className="hidden md:block">
        </div>
        <Link to="/products">Products</Link>
      </div>
      <Link to="/">
        <img src="https://c1.neweggimages.com/WebResource/Themes/Nest/logos/Newegg_full_color_logo_RGB.SVG" class="w-100 h-20" />
      </Link>
       
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


  export default Header