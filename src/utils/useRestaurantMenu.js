import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [recommended, setRecommended] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(MENU_API + resId);
      const resJson = await response.json();
      const allCards =
        resJson.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
          (obj) => obj.card?.card?.type === "CATEGORY_TYPE_RECOMMENDED"
        );
      const recommendedItems = allCards?.card?.card?.itemCards;

      setResInfo(resJson.data); // Ensure that we set the whole data, not just resJson
      setRecommended(recommendedItems);
    };

    fetchData();
  }, [resId]); // Include resId in the dependency array

  return { resInfo, recommended };
};

export default useRestaurantMenu;
