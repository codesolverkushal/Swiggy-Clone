import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  totalRatingsString
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
      <h3 className="font-bold py-2">{name.slice(0, 16)}</h3>
      <h4> {cuisines.slice(0, 2).join(", ")} </h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

export default RestaurantCard;