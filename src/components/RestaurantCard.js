import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  //console.log(props);
  //const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;
  return (
    <div className="w-56 shadow-lg p-2 m-2">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-lg font-bold">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestaurantCard;
