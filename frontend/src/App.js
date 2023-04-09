import './App.css';
import { Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Logging from './components/Logging';
import Loggedout from './components/Loggedout';
import CreateAccount from './components/CreateAccount';



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
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Logging toggleAuthenticated={toggleAuthenticated}/>}/>
          <Route path="/logout" element={<Loggedout/>}/>
          <Route path="/createaccount" element={<CreateAccount/>}/>
        </Routes>
      
      </div>
   





   
  );
}

export default App;
