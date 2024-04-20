import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [recommended, setRecommended] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log({ resId });
    console.log({ menuFullAPI: MENU_API + resId });
    const response = await fetch(MENU_API + resId);

    const resJson = await response.json();
    const allCards =
      resJson.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (obj) => obj.card?.card?.type === "CATEGORY_TYPE_RECOMMENDED"
      );
    const recommended = allCards?.card?.card?.itemCards;
    console.log({ resJson });
    setResInfo(resJson);
    setRecommended(recommended);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Destructure general restaurant info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

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
