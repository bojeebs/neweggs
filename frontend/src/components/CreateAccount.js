import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    console.log("createaccount-btn")
    e.preventDefault();
    const user = {
      username: username,
      password: password
    };
    try {
      const { data } = await axios.post(
        'https://newegg.onrender.com/create-user/',user,
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(data);
      navigate('/login');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Create Account" />
    </form>
  );
}

export default CreateAccount;