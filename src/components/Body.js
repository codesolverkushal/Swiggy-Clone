import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {

  // state variable - super powerful variable..
  const [listOfRestaurants,setListOfRestaurants] = useState(resList);

  // normal js variable
  


  // let listOfRestaurantsJS = [
  //   {
  //     data: {
  //       id: "365010",
  //       name: "Hotel Salam",

  //       cloudinaryImageId: "hgdmw8uwgewhiewwovjh",
  //       cuisines: ["Biryani", "Tandoor", "Arabian", "Indian", "Beverages"],

  //       costForTwo: 25000,
  //       costForTwoString: "₹250 FOR TWO",
  //       deliveryTime: 31,

  //       avgRating: "3.9",
  //       totalRatings: 500,
  //       new: false,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "365011",
  //       name: "KFC",

  //       cloudinaryImageId: "hgdmw8uwgewhiewwovjh",
  //       cuisines: ["Biryani", "Tandoor", "Arabian", "Indian", "Beverages"],

  //       costForTwo: 25000,
  //       costForTwoString: "₹250 FOR TWO",
  //       deliveryTime: 31,

  //       avgRating: "4.8",
  //       totalRatings: 500,
  //       new: false,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "365012",
  //       name: "Dominos",

  //       cloudinaryImageId: "hgdmw8uwgewhiewwovjh",
  //       cuisines: ["Biryani", "Tandoor", "Arabian", "Indian", "Beverages"],

  //       costForTwo: 25000,
  //       costForTwoString: "₹250 FOR TWO",
  //       deliveryTime: 31,

  //       avgRating: "4.2",
  //       totalRatings: 500,
  //       new: false,
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          // filter logic here.
          const filteredList =listOfRestaurants.filter(res=>res.data.avgRating>4);
          setListOfRestaurants(filteredList);
         
        }}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={() => {
          setListOfRestaurants(resList);         
        }}>
          Show All Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
