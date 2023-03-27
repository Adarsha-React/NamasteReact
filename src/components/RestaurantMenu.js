import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9234947&lng=77.6851069&restaurantId=1221"
    );
    const json = await data.json();
    console.log(json);
  }
  return (
    <div className="restaurant-menu">
      <h1>Restaurant Id: {id}</h1>
      <h2>Namaste</h2>
    </div>
  );
};
export default RestaurantMenu;
