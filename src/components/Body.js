import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

//not using keys (not acceptable) <<< index as keys <<<<<< unique id (Best)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
