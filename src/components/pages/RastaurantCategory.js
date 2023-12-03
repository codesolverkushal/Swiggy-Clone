import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{

    const [show,setShow] = useState(false);


    const handleClick = ()=>{
        setShowIndex();
        setShow(!show);
    }

    
    return (
    <div>
             {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    
                        <span className="font-bold text-200">{data.title} ({data.itemCards.length})</span>
                        {
                           (show && showItems) ? <span>⬆️</span> : <span>⬇️</span>
                        }
                        
        
                </div>

                { (show && showItems) && <ItemList items = {data.itemCards}/>}

            </div>
            {/* Accordian body */}

          
    </div>
    )
}

export default RestaurantCategory;