import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Utilize unique ids for keys when rendering lists - best practice to avoid re-render issues.
const Body = () => {
  // State for storing the complete list of restaurants.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // Separate state for storing filtered list of restaurants, allowing original list to remain unchanged.
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // State to capture and update search text.
  const [searchText, setSearchText] = useState("");

  // Effect hook to fetch data on component mount.
  useEffect(() => {
    fetchData();
  }, []);

  // Async function to fetch restaurant data from the API.
  const fetchData = async () => {
    const response = await fetch(RESTAURANT_LIST);
    const json = await response.json();
    // Using optional chaining to safely access deeply nested data.
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants); // Initialize filteredRestaurants with all restaurants
  };

  // Handler for search functionality.
  const handleSearch = () => {
    // Filters listOfRestaurants based on the search text and updates filteredRestaurants.
    const newFilteredRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(newFilteredRestaurants);
  };

  // Handler for filtering top rated restaurants.
  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.0
    );
    setFilteredRestaurants(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>Looks Like you are offline please check your Internet connection!</h1>
    );

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />{" "}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
