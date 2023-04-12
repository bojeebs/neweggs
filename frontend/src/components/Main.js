import { useEffect, useState } from "react";
import axios from "axios";

function Main({ isAuthenticated, toggleAuthenticated }) {
  
  const [message, setMessage] = useState("")

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     window.location.href = '/login';
  //   } else {
  //     (async () => {
  //       try {
  //         const { data } = await axios.get('https://newegg.onrender.com/home/', {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  //           },
  //         });
  //         setMessage(data.message);
  //       } catch (e) {
  //         console.log('not auth');
  //       }
  //     })();
  //   }
  // }, [isAuthenticated]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://newegg.onrender.com/admin/newegg/api/product/');
      setProducts(response.data);
      console.log(response.data)
    };
    
   getProducts();
  }, []);
  







  return (
   <div className="home-container">
      <h1>Welcome to my app</h1>
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default Main;

