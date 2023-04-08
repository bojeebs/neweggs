import axios from "axios";
import {useState} from "react";




function Logging () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const submit = async e => {
  console.log("submitworks")
  e.preventDefault();
  const user = {
    username: username,
    password: password
  };

  const {data} = await axios.post('https://newegg.onrender.com/api/user/',user,
    {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true
      
    },
   
  );
  console.log(data)
  localStorage.clear();
  localStorage.setItem('access_token', data.access);
  localStorage.setItem('refresh_token', data.refresh);
  axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
  window.location.href = '/';
}







  return (
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submit}>
          <h3 className="Auth-form-title">Sign In</h3>
           <label>Username</label>
              <input 
                placeholder="Enter Username" 
                name='username'  
                type='text' value={username}
                required 
                onChange={e => setUsername(e.target.value)}/>
            
            <div className="formpassword">
              <label>Password</label>
              <input name='password' 
                type="password"     
                className="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}/>
            </div>
            
              <button type="submit" 
                 className="btn btn-primary">Submit</button>
          
         
       </form>
     </div>
     )
  
}


export default Logging