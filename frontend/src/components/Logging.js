// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Logging({ isAuthenticated, toggleAuthenticated }) {
//   console.log(
//     "🚀 ~ file: Logging.js:8 ~ Logging ~ isAuthenticated:",
//     isAuthenticated
//   );
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   let navigate = useNavigate();

//   useEffect(() => {
//     const access_token = localStorage.getItem("access_token");
//     if (access_token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
//       toggleAuthenticated(true);
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     console.log("submitworks");
//     e.preventDefault();
//     const user = {
//       username: username,
//       password: password,
//     };
//     try {
//       const { data } = await axios.post(
//         "https://newegg.onrender.com/token/",
//         user,
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       console.log(data);
//       localStorage.clear();
//       localStorage.setItem("access_token", data.access);
//       localStorage.setItem("refresh_token", data.refresh);
//       axios.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${data["access"]}`;
//       toggleAuthenticated();
//       navigate("/home");
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleCreateAccountClick = () => {
//     navigate("/createaccount");
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-orange-500 rounded-lg shadow-md px-8 py-6">
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//           <h3 className="text-center text-gray-700 font-bold mb-4 text-lg">
//             Sign In
//           </h3>
//           <label className="block text-gray-700 font-bold mb-2">
//             Username:
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <label className="block text-gray-700 font-bold mb-2">
//             Password:
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//           >
//             Sign In
//           </button>
//           <div className="text-sm text-gray-700 flex items-center justify-center mt-4">
//             <span>Don't have an account? </span>
//             <span
//               className="underline cursor-pointer"
//               onClick={handleCreateAccountClick}
//             >
//               Create Account!
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Logging;
