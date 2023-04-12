import { Link } from 'react-router-dom';

export default function Header({ isAuthenticated, toggleAuthenticated }) {
  // const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     if (localStorage.getItem('access_token') !== null) {
  //       setIsAuth(true);
  //     } else {
  //       setIsAuth(false);
  //     }
  //   };

  //   window.addEventListener('storage', handleStorageChange);

   
  //   return () => window.removeEventListener('storage', handleStorageChange);
  // }, []);

  return (
<div className="header-container">
  <div className="flex justify-end items-center">
    <div className="ml-auto">
      <Link to="/">Create Account</Link>
    </div>
    <div className="hidden md:block">
      {isAuthenticated ? (
        <>
          <Link to="/">Home</Link> 
          <Link to="cart/">Cart</Link>
          <Link to="/logout" onClick={toggleAuthenticated}>Logout</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
    <div className="md:hidden">
      <button>Menu</button>
    </div>
    
  </div>
  <Link to="/home"><img src="https://c1.neweggimages.com/WebResource/Themes/Nest/logos/Newegg_full_color_logo_RGB.SVG" class="w-100 h-20" /></Link>
  
</div>

  )}