import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import RestaurantResultRow from "./RestaurantResultRow";
import "./RestaurantResults";

export default class RestaurantResults extends PureComponent {
  static propTypes = {
    restaurantData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div>
        <p style={{padding: "10px"}}><b>Featured Restaurants</b></p>
        {this.props.restaurantData.map(restaurantData => (
          <RestaurantResultRow
            key={restaurantData.title}
            symbol={restaurantData.symbol}
            title={restaurantData.title}
          />
        ))}
      </div>
    );
  }
}
