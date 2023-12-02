import { useState } from "react";
import MenuShi from "../MenuShimmer/MenuShi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from './../../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const {resInfo,infoCards} = useRestaurantMenu(resId);
  
 
  if (resInfo === null) {
    return <MenuShi/>;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
   
  // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { itemCards } =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

console.log(itemCards);



  return (
    <div className="menu">
      
        <h1>{name}</h1>
        
      
      <p>{cuisines.join(",")} - {costForTwoMessage}</p>


      
      <ul>
      {infoCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
</ul>
    </div>
  );
};

export default RestaurantMenu;


    