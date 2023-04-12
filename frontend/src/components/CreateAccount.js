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

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-orange-500 rounded-lg shadow-md px-8 py-6">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label className="block text-gray-700 font-bold mb-2">
            Username:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="block text-gray-700 font-bold mb-2">
            Password:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Account
          </button>
          <div className="text-sm text-gray-700 flex items-center justify-center mt-4">
            <span>Have an account? </span>
            <span className="underline cursor-pointer" onClick={handleSignInClick}>Sign In!</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount
