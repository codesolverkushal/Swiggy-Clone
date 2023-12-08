// Main.jsx
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import "./Main.css";

const Main = () => {
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const { setUserName, loggedInUser } = useContext(UserContext);

  return (
    <div className="text-center">
      <div
        className=" h-[84.8vh] bg-gradient-to-b from-blue-400 to-blue-600"
        style={backgroundImageStyle}
      >
        <div className="hero-container sm:flex sm:items-center sm:justify-center">
          <div className="w-9/12 h-72">
            <img className="rounded-lg mb-4 sm:mb-0" src="https://media0.giphy.com/media/abJN71IWfrVYY/giphy.gif?cid=ecf05e47v0z8b6wqmcrpmf6pqy0gcq922mh4t09pf6cizd9r&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="hero" /> 
            {/* <img className="rounded-lg mb-4 sm:mb-0" src="https://media.tenor.com/_txX8URCZP8AAAAi/foodpanda-food.gif" alt="hero" />  */}
          
          </div>

          <div className="font-cursive">
            <p className="hero-text text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight tracking-wide hidden sm:block text-center">
              Welcome to <span className="underline font-bold">Kp-food</span>, where every
              dish is a celebration of flavours and a journey through culinary
              delight.
            </p>
          </div>
        </div>
        <div className="lg:flex justify-around p-4">
          <div className="sm:flex sm:justify-center sm:items-center">
            <NavLink to="/home">
              <button className="button primary-blue text-white font-extrabold text-3xl bg-green-500 px-4 py-2 sm:px-1 rounded-full lg:hidden transform transition-transform duration-300 hover:scale-105 hover:bg-green-700 hover:text-black">
                Eat Now
              </button>
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/home">
              <button className="button text-gray-950 font-extrabold text-3xl bg-green-500 p-3 sm:px-1 rounded-full hidden lg:inline-block shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-green-700 hover:text-black">
                Eat Now
              </button>
            </NavLink>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 p-4 text-white kushal">
           Made by kushal
        </div>

      </div>
    </div>
  );
};

export default Main;
