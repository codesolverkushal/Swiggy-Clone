// Main.jsx
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Main = () => {

  const {setUserName,loggedInUser} = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center  h-[84.6vh]  bg-gradient-to-b from-blue-400 to-blue-600 ">
      <img
        src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg" // Replace with your actual image source
        alt="Background Image"
        className="object-cover w-full h-full absolute top-0 left-0 filter brightness-50"
      />
      <div className="relative z-10 p-8 bg-white bg-opacity-90 backdrop-blur-md rounded-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to My App</h1>
        <div>
        <div className="search m-4 p-4">
          <label>UserName: </label>
          <input
            className="border border-black"
            value={loggedInUser} 
            onChange={(e) => setUserName(e.target.value)}
            />
        </div>
        <NavLink to="/Home">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Login
          </button>
        </NavLink>
      </div>
      </div>
    </div>
  );
};

export default Main;