import { useState } from "react";
import "../../kushal.css";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  // const btnName = "Login";
  const [btnNameReact,setBtnNameReact] = useState("Login");
  
  return (   
    <header className="navbar">
      <div className="logo">
        <img src={LOGO_URL} alt="Swiggy Logo" />
      </div>
      <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login"
                    onClick={()=>{
                      btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}
                    style={{ backgroundColor: btnNameReact === "Login" ? "green" : "red" }}
                  >
                    {btnNameReact}
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
