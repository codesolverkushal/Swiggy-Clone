// Main.jsx
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import "./Main.css"

const Main = () => {


  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const {setUserName,loggedInUser} = useContext(UserContext);

  return (
    <div className="text-center">
    <div className=" h-[84.6vh] bg-gradient-to-b from-blue-400 to-blue-600" style={backgroundImageStyle}>
      <div className="hero-container sm:flex sm:items-center sm:justify-center">
         <div className="w-9/12">
         <img className="rounded-lg mb-4 sm:mb-0" src="https://media.tenor.com/_txX8URCZP8AAAAi/foodpanda-food.gif" alt="hero" />

         </div>
          

            <div>
            <p className="hero-text text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight tracking-wide hidden sm:block text-center">
              Welcome to <span className="underline">Kp-food</span>, where every dish is a celebration of flavors and a journey through culinary delight.
            </p>
            </div>
        </div>
        <div className="lg:flex justify-between p-4">
        <div className="sm:flex sm:justify-center sm:items-center">
          <NavLink to="/home">
            <button className="button primary-blue text-white font-extrabold text-3xl bg-blue-500 px-4 py-2 sm:px-1 rounded-full lg:hidden">
              Eat Now
            </button>
          </NavLink>
        </div>
        <div className="">
          <NavLink to="/home">
            <button className="button primary-blue text-white font-extrabold text-3xl bg-blue-500 p-3 sm:px-1 rounded-full hidden lg:inline-block shadow-md">
              Eat Now
            </button>
          </NavLink>
        </div>
      </div>


    </div>
    </div>
  );
};

export default Main;



