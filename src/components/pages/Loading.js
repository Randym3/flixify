import React, { Component } from "react";
import "./Loading.css";

export class Loading extends Component {
  // Sets the opacity to 0 100ms after component mounted and removes loader from DOM 2 seconds after
  componentDidMount() {
    setTimeout(() => {
      document.querySelector(".loader-container").remove();
    }, 700);
  }

  render() {
    return (
      <div className="loader-container row  align-items-center">
        <div className="lds-ellipsis  ">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Loading;
