import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{

  const [drop,setDrop] = useState(false);


    const handleClick = ()=>{
        setShowIndex();
        setDrop(!drop)
       
    }   

    
    return (
    <div>
             {/* Header */}
             <div className="flex justify-center items-center" >
            <div className="w-6/12  my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    
                        <span className="font-bold text-200">{data.title} ({data.itemCards.length})</span>
                        {
                           (drop && showItems) ? <span>⬆️</span> : <span>⬇️</span>
                        }
                           
                        
                        
        
                </div>

                {(drop && showItems) && <ItemList items = {data.itemCards}/>}

            </div>
            {/* Accordian body */}

            </div>  
    </div>
    )
}

export default RestaurantCategory;