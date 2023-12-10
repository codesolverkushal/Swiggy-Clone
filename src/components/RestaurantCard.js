import { CDN_URL } from "../utils/constants";
import StarRating from "../utils/StarRating";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  totalRatingsString,
  }) => {


  return (
    <div
      className="m-4 p-4 w-[260px] rounded-lg bg-gray-100 hover:bg-gray-200"

    >
      <img
        className="rounded-lg"
        // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/735e039e100fd4631f26dd07f986e074"
        src={CDN_URL + cloudinaryImageId}
        alt="reslogo"
      />
      <h3 className="font-extrabold text-lg py-2 text-gray-600">{name.slice(0, 16)}</h3>
      <h4 className="font-bold text-gray-600"> {cuisines.slice(0, 2).join(", ")} </h4>
      <StarRating rating = {avgRating}/>
      <h4 className="text-gray-600">{costForTwo}</h4>
      <h4 className="text-gray-600">{totalRatingsString}</h4>
    </div>
  );
};

// Higher order component

// input - restaurantCard =>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;