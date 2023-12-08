// import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem,removeItem } from "../../utils/cartSlice";
import { addPrice,removePrice } from "../../utils/priceSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    dispatch(addItem(item));    
  }

  const handleAddPrice = (price)=>
  {
    dispatch(addPrice(price))
  }

  const handleRemovePrice = (price) =>{
    dispatch(removePrice(price));
  }

  const handleRemoveItem = (item)=>{
    dispatch(removeItem())
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>- ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
           <div className="absolute">
            <button onClick ={() => {
                handleAddItem(item);
                handleAddPrice(item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100);
              }} className="p-1 rounded-lg bg-black text-white shadow-lg"> Add More +    </button>   
            <button onClick={()=>{
              handleRemoveItem();
              handleRemovePrice(item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100);
            }} className="p-1 rounded-lg bg-red-700 text-white shadow-lg right-0"> remove -</button>   
           </div> 
            <img className="rounded-lg"  src={CDN_URL + item.card.info.imageId} alt="" />  
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
