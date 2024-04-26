import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [recommended, setRecommended] = useState(null);
  const [categories, setCategories] = useState(null); // Define categories state

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(MENU_API + resId);
      const resJson = await response.json();
      const allCards =
        resJson.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
          (obj) => obj.card?.card?.type === "CATEGORY_TYPE_RECOMMENDED"
        );

      const categoriesData =
        resJson.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      const recommendedItems = allCards?.card?.card?.itemCards;

      setResInfo(resJson.data); // Ensure that we set the whole data, not just parts of it
      setRecommended(recommendedItems);
      setCategories(categoriesData); // Set the categories from fetched data
    };

    fetchData();
  }, [resId]); // Include resId in the dependency array

  return { resInfo, recommended, categories };
};

export default useRestaurantMenu;
