import { useState } from "react";
import MenuShi from "../MenuShimmer/MenuShi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from './../../utils/useRestaurantMenu';
import RestaurantCategory from "./RastaurantCategory";
import { FaStar } from 'react-icons/fa';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const {resInfo,infoCards} = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(-1);
  
 
  if (resInfo === null) {
    return <MenuShi/>;
  }

  const { name,avgRating, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  
   
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundImageStyle}>
    <div className="text-center">
      <div className="flex justify-center mb-6">   
      <div className="mx-5 bg-black p-4 rounded-md flex items-center">
  
  <h1 className="text-2xl text-white font-bold">{name}</h1>  
</div>
      <div className="mx-5 bg-green-200 p-4 rounded-full flex items-center">

          <span className="text-green-500 mr-2"><FaStar/></span>
          <h1 className="text-2xl text-black font-bold">{avgRating}</h1>  
        </div> 
     </div>
      <p className="font-bold text-gray-300">{cuisines.join(",")} - {costForTwoMessage}</p>

      {/* Categories accordian */}

      {categories.map((category,index) =>
          <RestaurantCategory
            key={category?.card?.title} 
            data = {category?.card?.card}
            showItems = {index == showIndex ? true : false}
            setShowIndex = {()=> setShowIndex(index)}
          />)}
    </div>
    </div>
  );
};

export default RestaurantMenu;


    