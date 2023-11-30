import React from 'react';
import "./GroceryStyles.css"
import { NavLink } from 'react-router-dom';

const GroceryList = () => {
  return (
    <div className="main-menu-container">
    <div className="main-menu">
      <h1>Welcome!</h1>
      <p>The process will be open shortly.</p>
      <button className="wow-button"><NavLink className="wow-button-navlink" to = "/">Back to Main Menu</NavLink></button>
    </div>
  </div>
  );
};

export default GroceryList;
