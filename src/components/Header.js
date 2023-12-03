import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from './../utils/useOnlineStatus';
import  UserContext  from "../utils/UserContext"
const Header = () => {
  // const btnName = "Login";
  const [btnNameReact,setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
 
  const {loggedInUser} = useContext(UserContext)

  // if no dependency array => useEffect is called on every render.
  // if dependency array is empty = [] => useEffect is called on initial render(Just Once).
  // if dependency array has btnNameReact => useEffect is called everytime when btnNameReact is updated. 
  

  
  return (   
    <div className="sticky top-0 left-0 right-0 z-50 bg-pink-200 shadow-lg sm:bg-yellow-200 lg:bg-pink-200 mb-5">    
    <div className="flex justify-between">
     <div className="logo">
          <NavLink to="/"><img className="w-28 ml-4 rounded-full" src={LOGO_URL} alt="Swiggy Logo" /></NavLink>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 font-bold text-lg">
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4"><NavLink to="/">Home</NavLink></li>
            <li className="px-4"><NavLink to="/about">About</NavLink></li>
            <li className="px-4"><NavLink to="/contact">Contact Us</NavLink></li>
            <li className="px-4"><NavLink to = "/grocery">Grocery</NavLink></li>
            <li className="px-4"><NavLink to="/cart">Cart</NavLink></li>
            <button className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white px-2 rounded"
                    onClick={()=>{
                      btnNameReact === "Login" ? setBtnNameReact(loggedInUser) : setBtnNameReact("Login");
                    }}
                    style={{ backgroundColor: btnNameReact === "Login" ? "green" : "red" }}
                  >
                    <NavLink className="login-btn-nav" to="/authentication"> {btnNameReact}</NavLink>
                   
            </button>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;







 // <div className="header">
    //   <div className="logo-container">
    //     <img
    //       className="logo"
    //       src={LOGO_URL} alt="swiggy_logo"

    //     />
    //   </div>

    //   <div className="nav-items">
    //     <ul>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Contact Us</li>
    //       <li>Cart</li>
    //     </ul>
    //   </div>
    // </div>
