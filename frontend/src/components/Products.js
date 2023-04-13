import { useState, useEffect } from 'react';
import axios from 'axios';
import CartModal from './CartModal';




const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const handleCloseCartModal = () => {
    setShow(false);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://newegg.onrender.com/product/');
      setProducts(response.data);
      console.log(response.data)
    };
    
    getProducts();
  }, []);

 
  customerId = 1

  const addToCart = async (customerId, productId) => {
    try {
      customerId = 1
      await axios.post(`https://newegg.onrender.com/cart/add/${customerId}/${productId}/`);
      console.log(`Product ${productId} added to cart for customer ${customerId}`);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };


  const handleAddToCart = (customerId, productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setCart([...cart, selectedProduct]);
    addToCart([customerId, productId])
    console.log(`Product ${productId} added to cart`);
  }

  return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-100 p-4 m-2 flex justify-between items-center max-w-[500px]">
          <div className="flex-1 max-w-15 overflow-hidden">
            <h3 className="text-lg font-medium break-words">{product.product_name}</h3>
            <h4 className="text-sm">Free Shipping</h4>
            <button className="bg-orange-500 text-white py-2 px-4 rounded" onClick={() => handleAddToCart(customerId, product.id)}>
              Add to Cart
            </button>
          </div>
          <div className="flex items-center">
            <img src={product.image_url} alt={product.product_name} className="w-65 h-48 object-cover object-right ml-4" />
          </div>
        </div>
      ))}
      <CartModal show={show} handleCloseCartModal={handleCloseCartModal} cart={cart} />
    </div>
  );
}

export default Products;
