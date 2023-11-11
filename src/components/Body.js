import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";
const Body = () => {

  // state variable - super powerful variable..
  const [listOfRestaurants,setListOfRestaurants] = useState(resList);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      //It may showing an error during data fetching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setListOfRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(listOfRestaurants);
  

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList =listOfRestaurants.filter(res=>res.info.avgRating>4);
          console.log(filteredList);
          setListOfRestaurants(filteredList);
         
        }}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={() => {
          setListOfRestaurants(resList); 
          fetchData();        
        }}>
          Show All Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
    
          
        ))}
      </div>
    </div>
  );
};

export default Body;