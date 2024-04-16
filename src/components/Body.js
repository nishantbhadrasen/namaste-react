import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata";

//not using keys (not acceptable) <<< index as keys <<<<<< unique id (Best)

let listOfRestaurants = [
  {
    info: {
      id: "101059",
      name: "Dominos",
      cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
      costForTwo: "₹300 for two",
      cuisines: [
        "Sweets",
        "Beverages",
        "Desserts",
        "Snacks",
        "Chaat",
        "Street Food",
        "Chinese",
        "Bakery",
        "North Indian",
        "South Indian",
      ],
      avgRating: 4.6,
      avgRatingString: "4.6",
      deliveryTime: "31",
    },
  },
  {
    info: {
      id: "523122",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Maharaja Complex",
      areaName: "Peer Gate Area",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 3.2,
      deliveryTime: "32",
    },
  },
  {
    info: {
      id: "102589",
      name: "Rolls Mania",
      cloudinaryImageId: "fafbytqpy9ynyuo55p2k",
      areaName: "Kohefiza",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food", "Snacks", "American", "Beverages"],
      avgRating: 4.2,
      deliveryTime: "21",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
