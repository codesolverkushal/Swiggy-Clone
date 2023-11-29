import { useEffect, useState } from "react";
import MenuShi from "../MenuShimmer/MenuShi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from './../../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [menuHidden, setMenuHidden] = useState(false);
  const [buttonName, setButtonName] = useState(true);


  const {resInfo,infoCards} = useRestaurantMenu(resId);
  
 
  if (resInfo === null) {
    return <MenuShi/>;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
   
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // toggle button it is the extra style..
  const toggleMenu = () => {
    setMenuHidden(!menuHidden);
    setButtonName(!buttonName)
  };

  const buttonColor = menuHidden ? "green" : "red";


  return (
    <div className="menu">
      
        <h1>{name}</h1>
        
      
      <p>{cuisines.join(",")} - {costForTwoMessage}</p>

      
      <button className="button-style" onClick={toggleMenu} style={{ backgroundColor: buttonColor }}>
        {/* {buttonName == false ? <h4>Show Menu</h4> : <h4>Close Menu</h4>} */}
        {menuHidden ? <span style={{backgroundColor:"#fff"}}>&#x1F50D;</span> : <span style={{backgroundColor:"#fff"}}>&#x274C;</span>}
        
        </button>


      
      <ul className={menuHidden ? "menu-hidden" : ""}>
      {itemCards.map((item) => (
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


    