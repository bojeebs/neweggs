import { useEffect, useState } from "react";
import axios from "axios";

function Main({ isAuthenticated, toggleAuthenticated }) {
  <h1>Main</h1>;
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/login';
    } else {
      (async () => {
        try {
          const { data } = await axios.get('https://newegg.onrender.com/home/', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          setMessage(data.message);
        } catch (e) {
          console.log('not auth');
        }
      })();
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h3>Hi {message}</h3>
    </div>
  );
}

export default Main;

