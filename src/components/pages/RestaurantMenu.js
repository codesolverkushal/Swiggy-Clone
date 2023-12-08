import { useState } from "react";
import MenuShi from "../MenuShimmer/MenuShi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from './../../utils/useRestaurantMenu';
import RestaurantCategory from "./RastaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const {resInfo,infoCards} = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(-1);
  
 
  if (resInfo === null) {
    return <MenuShi/>;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
   
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
      
      <h1 className="text-xl text-white font-bold ">{name}</h1>      
      <p className="font-bold text-gray-500">{cuisines.join(",")} - {costForTwoMessage}</p>

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


    