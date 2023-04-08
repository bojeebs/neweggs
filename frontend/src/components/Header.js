import React, { useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom' 

export default function Header() 
{ 
  
  const [isAuth, setIsAuth] = useState(false); 
  
  useEffect(() => { 
    if (localStorage.getItem('access_token') !== null) 
    { setIsAuth(true); } 
  }, 
    [isAuth]); 
    
    return ( 
    <div> 
      
      {isAuth ? <Link to="/" className="navlink"></Link> : null} 
      <h1 className="header=text">Newegg</h1> 
      {isAuth ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>} </div> ); 
      
    
    
    
    
    } 