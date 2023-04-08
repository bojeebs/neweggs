import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Logging from './components/Logging';
import Loggedout from './components/Loggedout';
import CreateAccount from './components/CreateAccount';


function App() {



  return (
    <div className="App">
      <Header/>

       <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Logging/>}/>
          <Route path="/logout" element={<Loggedout/>}/>
          <Route path="/createaccount" element={<CreateAccount/>}/>
        </Routes>
      
      </div>
   





   
  );
}

export default App;
