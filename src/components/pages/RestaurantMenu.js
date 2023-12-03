import { useState } from "react";
import MenuShi from "../MenuShimmer/MenuShi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from './../../utils/useRestaurantMenu';
import RestaurantCategory from "./RastaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const {resInfo,infoCards} = useRestaurantMenu(resId);
  
 
  if (resInfo === null) {
    return <MenuShi/>;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
   
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  


  return (
    <div className="text-center">
      
      <h1 className="text-xl font-bold my-6 ">{name}</h1>      
      <p className="font-bold text-gray-500">{cuisines.join(",")} - {costForTwoMessage}</p>

      {/* Categories accordian */}

      {categories.map((category) =><RestaurantCategory key={category?.card?.title} data = {category?.card?.card}/>)}
    </div>
  );
};

export default RestaurantMenu;


    