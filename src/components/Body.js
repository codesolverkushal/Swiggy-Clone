import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

  // state variable - super powerful variable..
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [searchRestaurants,setSearchRestaurants] = useState([]);
  
  // set by kushal
  const [searchText,setSearchText] = useState("");

  console.log(listOfRestaurants)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(()=>{
    fetchData();
  },[]);
  

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      setSearchRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  };




  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Offline...</h1>
  }


  const backgroundImageStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/1079020/pexels-photo-1079020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", // Placeholder image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    
    // filter: "brightness(50%)", // Adjust the brightness as needed
  };


 

  return listOfRestaurants.length === 0 ?
  ( <Shimmer/>
  ) : (
    <div className="body" style={backgroundImageStyle}>
      <div className="filter flex items-center justify-center">

      <div className="m-4 p-4 hidden sm:block">
        <button className="px-4 py-2 bg-green-200 rounded-lg " onClick={() => {
          const filteredList =searchRestaurants.filter(res=>res.info.avgRating>4.4);
          // console.log(filteredList);
          if(filteredList.length == 0){
            setSearchRestaurants(filteredList);
          }
          else{
            setSearchRestaurants(filteredList);
          }
 
         
        }}>
          Top Rated Restaurants
        </button>

        </div>
        <div className="search m-4 p-4">
          <input type="text" placeholder="KFC" className="border border-solid border-black rounded-lg p-1 bg-slate-400 text-white" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
          <button className="px-4 py-2 bg-green-200 m-4 rounded-lg"
          onClick={()=>{
              // console.log(searchText);
              const searchData = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setSearchRestaurants(searchData);
             
          }}>Search</button>
        </div>


      </div>
      <div className="res-container">
       

        <div className="flex flex-wrap justify-center items-center">
        {searchRestaurants.map((restaurant) => (
          <Link className="link-decoration" key={restaurant?.info.id} to={"/restaurants/"+ restaurant?.info.id}>
            {
              restaurant?.info.avgRating > 4.4
              ?( <RestaurantCardPromoted {...restaurant?.info}/>):
              (<RestaurantCard {...restaurant?.info} />)            
            }
           
            
            </Link>         
        ))}

        </div>
        
      </div>
    </div>
  );
        
};

export default Body;