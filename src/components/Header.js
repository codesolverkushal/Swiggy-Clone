import "../../kushal.css";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
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

    <header className="navbar">
      <div className="logo">
        <img src={LOGO_URL} alt="Swiggy Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
