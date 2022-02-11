import React, { Component } from "react";

class Painting extends Component {
  render() {
    const { title, description, year, url} = this.props;

    return (
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{year}</p>
        <img src={url} alt="image of painting"/>
      </div>
    );
  }
}

export default Painting;
