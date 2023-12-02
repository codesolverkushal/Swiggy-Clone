import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from './../utils/useOnlineStatus';
const Header = () => {
  // const btnName = "Login";
  const [btnNameReact,setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("Header Render");

  // if no dependency array => useEffect is called on every render.
  // if dependency array is empty = [] => useEffect is called on initial render(Just Once).
  // if dependency array has btnNameReact => useEffect is called everytime when btnNameReact is updated. 
  useEffect(()=>{
    console.log("useEffect Called");
  },[btnNameReact])

  

  
  return (   
    <div className="flex justify-between bg-pink-200 shadow-lg mb-3">    
    <div className="logo">
          <img className="w-56" src={LOGO_URL} alt="Swiggy Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4">
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4"><NavLink to="/">Home</NavLink></li>
            <li className="px-4"><NavLink to="/about">About</NavLink></li>
            <li className="px-4"><NavLink to="/contact">Contact Us</NavLink></li>
            <li className="px-4"><NavLink to = "/grocery">Grocery</NavLink></li>
            <li className="px-4"><NavLink to="/cart">Cart</NavLink></li>
            <button className="login"
                    onClick={()=>{
                      btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}
                    style={{ backgroundColor: btnNameReact === "Login" ? "green" : "red" }}
                  >
                    <NavLink className="login-btn-nav" to="/authentication"> {btnNameReact}</NavLink>
                   
            </button>
        </ul>
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
