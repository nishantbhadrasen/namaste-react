import React from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, recommended } = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      {name && (
        <>
          <h1>{name}</h1>
          <p>{cuisines?.join(", ")}</p>
          <h3>{costForTwoMessage}</h3>
        </>
      )}
      <h2>Menu</h2>
      <ul>
        {recommended?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" ₹ "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
