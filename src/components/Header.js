import { useState,useContext,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from './../utils/useOnlineStatus';
import  UserContext  from "../utils/UserContext"
import { useSelector } from "react-redux";
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {

  const [btnNameReact,setBtnNameReact] = useState("Login");
  const [showMenu, setShowMenu] = useState(true);

  const onlineStatus = useOnlineStatus();
 
  const {loggedInUser} = useContext(UserContext)

  // if no dependency array => useEffect is called on every render.
  // if dependency array is empty = [] => useEffect is called on initial render(Just Once).
  // if dependency array has btnNameReact => useEffect is called everytime when btnNameReact is updated. 

  const cart = useSelector((store)=>store.cart.items);
  console.log(cart);

  const backgroundImageStyle = {
    backgroundImage: "url('https://img.freepik.com/premium-photo/background-cooking-black-wooden-background-top-view-free-space-your-text_187166-5650.jpg?size=626&ext=jpg&ga=GA1.1.1651881561.1696657168&semt=ais')", // Placeholder image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    
    // filter: "brightness(50%)", // Adjust the brightness as needed
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  
 
  
  return (   
    <div className="sticky top-0 left-0 right-0 z-50 bg-green-300 shadow-lg sm:bg-yellow-200 lg:bg-green-200" style={backgroundImageStyle}>   
      <div className="flex">
      <button className="sm:hidden font-bold text-3xl text-white" onClick={toggleMenu}>
            ☰
          </button>
     </div> 
    <div className="flex flex-col sm:flex-row justify-between items-center">
     <div className="logo mb-2 sm:mb-0">
          <NavLink to="/"><img className="w-28 ml-4 rounded-full" src={LOGO_URL} alt="Swiggy Logo" /></NavLink>
      </div>
      <div className="flex items-center">
        <ul className={`flex flex-col sm:flex-row p-4 font-bold text-lg mt-2 sm:mt-2 ${showMenu ? "block" : "hidden"} text-center items-center text-white`}>
            <li className="px-4 hidden sm:block">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4"><NavLink to="/home">Home</NavLink></li>
            <li className="px-4"><NavLink to="/about">About</NavLink></li>
            <li className="px-4"><NavLink to="/contact">Contact Us</NavLink></li>
            <li className="px-4"><NavLink to = "/grocery">Grocery</NavLink></li>
           


<li className="px-4 relative mr-3">
  <NavLink to="/cart" className="">
    <FaShoppingCart size={35} /> 
    {cart.length > 0 && (
      <span className="bg-red-500 text-sm mx-1 text-white px-1 rounded-full absolute top-0 right-0">
        {cart.length}
      </span>
      
    )}
    
  </NavLink>
</li>
<li>
            <button className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white px-2 m-2 rounded"
                    onClick={()=>{
                      btnNameReact === "Login" ? setBtnNameReact(loggedInUser) : setBtnNameReact("Login");
                    }}
                    style={{ backgroundColor: btnNameReact === "Login" ? "green" : "red" }}
                  >
                    <NavLink className="login-btn-nav" to="/authentication"> {btnNameReact}</NavLink>
                   
            </button>
  </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;


