import { useEffect, useState } from "react";
import "../../kushal.css";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from './../utils/useOnlineStatus';
const Header = () => {
  // const btnName = "Login";
  const [btnNameReact,setBtnNameReact] = useState("Login");
  const [activeLink, setActiveLink] = useState("Home"); // Initialize with the default active link
  const onlineStatus = useOnlineStatus();
  console.log("Header Render");

  // if no dependency array => useEffect is called on every render.
  // if dependency array is empty = [] => useEffect is called on initial render(Just Once).
  // if dependency array has btnNameReact => useEffect is called everytime when btnNameReact is updated. 
  useEffect(()=>{
    console.log("useEffect Called");
  },[btnNameReact])

  
  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Additional logic if needed
  };


  const navbarStyle = {
    backgroundColor: activeLink === "Grocery" ? "rgb(139, 188, 139)" : "#d2978e",
  };
  
  return (   
    <header className="navbar" style={navbarStyle}>    
    <div className="logo">
      <NavLink to="/">
          <img src={LOGO_URL} alt="Swiggy Logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li><NavLink to="/" onClick={() => handleLinkClick("Home")}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => handleLinkClick("About")}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={() => handleLinkClick("Contact Us")}>Contact Us</NavLink></li>
            <li><NavLink to = "/grocery" onClick={() => handleLinkClick("Grocery")}>Grocery</NavLink></li>
            <li><NavLink to="/cart" onClick={() => handleLinkClick("Cart")}>Cart</NavLink></li>
            <button className="login"
                    onClick={()=>{
                      btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}
                    style={{ backgroundColor: btnNameReact === "Login" ? "green" : "red" }}
                  >
                    <NavLink className="login-btn-nav" to="/authentication"> {btnNameReact}</NavLink>
                   
            </button>
        </ul>
      </nav>
    </header>
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
