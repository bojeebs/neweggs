import './App.css';
import { Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Logging from './components/Logging';
import Loggedout from './components/Loggedout';
import CreateAccount from './components/CreateAccount';
import Cart from './components/Cart'


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated);
  }

  return (
    <div className="App">
      <Header
      isAuthenticated={isAuthenticated}
      toggleAuthenticated={toggleAuthenticated}/>

       <Routes>
          <Route path="/" element={<Main isAuthenticated={isAuthenticated} toggleAuthenticated={toggleAuthenticated}/>}/>
          <Route path="/login" element={<Logging isAuthenticated={isAuthenticated} toggleAuthenticated={toggleAuthenticated}/>}/>
          <Route path="/logout" element={<Loggedout isAuthenticated={isAuthenticated} toggleAuthenticated={toggleAuthenticated}/>}/>
          <Route path="/createaccount" element={<CreateAccount isAuthenticated={isAuthenticated} toggleAuthenticated={toggleAuthenticated}/>}/>
          <Route path="/cart" element={<Cart isAuthenticated={isAuthenticated} toggleAuthenticated={toggleAuthenticated}/>}/>
        </Routes>
      
      </div>
   





   
  );
}

export default App;
