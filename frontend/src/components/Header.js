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
    <div>
      <Link to="/createaccount">CreateAccount</Link>
      {isAuthenticated ? (
        <>
        <Link to="/">Home</Link> 
        <Link to="cart/">Cart</Link>
        </>
        ) : null}
      <h1 className="header=text">Newegg</h1>
      {isAuthenticated ? (
        <Link to="/logout" onClick={toggleAuthenticated}>
          Logout
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
      
    
    
    
    
    