import './App.css';
import { Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

import Cart from './components/Cart'
import Products from './components/Products'




function App() {

  
  




  return (
    <div className="App">
      <Header/>
      
       <Routes>
          <Route path="/" element={<Main/>}/> 
          {/* <Route path="/login" element={<Logging />}/> */}
          {/* <Route path="/logout" element={<Loggedout/>}/> */}
          {/* <Route path="/" element={<CreateAccount />}/> */}
          <Route path="/cart" element={<Cart />}/>
          <Route path="/products" element={<Products/>}/>
          
        </Routes>
        
      
       
      
      </div>
  
  );
}

export default App;
