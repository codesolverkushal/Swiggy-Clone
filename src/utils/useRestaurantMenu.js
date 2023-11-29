import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    const [infoCards,setInfoCards] = useState([]);
    useEffect(() => {
      const fetchMenu = async () => {
        try {
          const data = await fetch(MENU_API + resId);
          const json = await data.json();
          setResInfo(json.data);
  
          // Extract and set infoCards after setting resInfo
          const x = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          const extractedInfoCards = x
            ?.map((card) => card?.card?.card.itemCards)
            .filter((checkData) => checkData !== undefined)
            .flat()
            .slice(0, 16); // Limit to the first 20 items
          setInfoCards(extractedInfoCards || []);
        } catch (error) {
          console.error("Error fetching menu:", error);
        }
      };
  
      fetchMenu();
    }, [resId]);

    return (
      {resInfo,infoCards}
    )
}


export default useRestaurantMenu;