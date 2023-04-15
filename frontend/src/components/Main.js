import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Main({ }) {
  
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
      const response = await axios.get('http://localhost:8000/product/');
      setProducts(response.data);
      console.log(response.data)
    };
    
   getProducts();
  }, []);
  







  return (

  <div>
  <Carousel controls>
    <Carousel.Item>
      <img
        className="d-block w-300 carousel-image-one"
        src="https://promotions.newegg.com/nepro/23-0389/1920x660.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-300 carousel-image-two"
        src="https://promotions.newegg.com/samsung/23-0439/1920x660.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-image-three"
        src="https://promotions.newegg.com/nepro/22-2246/1920x660.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div className="mt-10 mb-10 ml-9">
  <h1 className="text-3xl font-bold">Todays Best Deals</h1>
</div>
  <div className="flex flex-wrap justify-center items-center">
    {products.slice(0, 6).map((product) => (
      <div key={product.id} className="bg-gray-100 p-4 m-2 flex justify-between items-center max-w-[500px]">
        <div className="flex-1 max-w-15 overflow-hidden">
          <h3 className="text-lg font-medium break-words">{product.product_name}</h3>
        </div>
        <img src={product.image_url} alt={product.product_name} className="w-65 h-48 object-cover object-right" />
      </div>
    ))}
  </div>
</div>

  )}
export default Main;

