import React, { Component } from "react";
import Painting from "./Painting";

class Paintings extends Component {
  render() {
    const allPaintings = this.props.paintings.map((painting, index) => {
      return (
        <Painting
          key={index}
          title={painting.title}
          description={painting.description}
          year={painting.year}
          url={painting.url}
        />
      );
    });

    return (
      <div className="paintings">
        {allPaintings}
      </div>
    );
  }
}

export default Paintings;
