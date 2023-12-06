import React from 'react';
import "./GroceryStyles.css"
import { NavLink } from 'react-router-dom';

const GroceryList = () => {

  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className='' style={backgroundImageStyle}>
    
    <div className="h-[84.6vh] flex items-center justify-center bg-cover bg-center" style={backgroundImageStyle}>
      <div className=" bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Welcome to KP Mart!</h1>
        <p className="text-gray-600 mb-6">Our services will be available soon.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
          <NavLink to="/">Back to Main Menu</NavLink>
        </button>
      </div>
    </div>
  </div>
  );
};


export default GroceryList;
