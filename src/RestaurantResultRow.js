import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./RestaurantResultRow.css";

export default class RestaurantResultRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    // const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    // const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src="https://user-images.githubusercontent.com/41012778/81021854-2c422080-8e3a-11ea-8d99-53d7e3428855.png" />
        <span className="title">{this.props.title}</span>
        <span className="info">Click for Details</span>
      </div>
    );
  }
}
