import restaurantList from "./restaurantList.json";

export default function filterRestaurant(searchText, maxResults) {
  return restaurantList.restaurants
    .filter(restaurant => {
      if (restaurant.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (restaurant.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
