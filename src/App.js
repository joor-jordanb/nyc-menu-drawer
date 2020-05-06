import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import RestaurantResults from "./RestaurantResults";
import filterRestaurant from "./filterRestaurant";
import Map from "./Map"

require('dotenv').config()

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredRestaurant: filterRestaurant("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredRestaurant: filterRestaurant(event.target.value, 20)
    });
  };

  render() {
    return (
      <React.Fragment>
      <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <div style={{display: "flex"}}>
        <div style={{flex: "9"}}>
          <RestaurantResults restaurantData={this.state.filteredRestaurant} />
        </div>
        <div style={{flex: "16"}}><Map/></div>
        </div>
      </React.Fragment>
    );
  }
}
