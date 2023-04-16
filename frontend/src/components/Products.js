import { useState, useEffect } from 'react';
import axios from 'axios';
import CartModal from './CartModal';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

 


  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:8000/product/');
      setProducts(response.data);
      console.log(response.data);
    };
    
    getProducts();
  }, []);


  const handleAddToCart = async (productId) => {
    try {
      const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken')).split('=')[1];
  
      const response = await axios.post(`http://localhost:8000/cart/add/${productId}/`, {}, {
        headers: { 'X-CSRFToken': csrftoken }
      });
  
      setCart(cart => [...cart, { ...response.data, quantity: 1 }]);
      console.log(`Product ${productId} added to cart`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }
  



  

  return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-100 p-4 m-2 flex justify-between items-center max-w-[500px]">
          <div className="flex-1 max-w-15 overflow-hidden">
            <h3 className="text-lg font-medium break-words">{product.product_name}</h3>
            <h4 className="text-sm">Free Shipping</h4>
            <button className= "bg-orange-500 text-white py-2 px-4 rounded" onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </div>
          <div className="flex items-center">
            <img src={product.image_url} alt={product.product_name} className="w-65 h-48 object-cover object-right ml-4" />
          </div>
        </div>
      ))}
       
        <CartModal cart={cart} setCart={setCart}/>
    </div>
  );
};

export default Products;

