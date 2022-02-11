import React from "react";
import "./App.css";
import Paintings from "./Paintings";
// import Form from "./Form/Form";
import LifesWork from "./LifesWork";

const {paintings} = LifesWork;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Franz Marc's Works</h1>
        {/* <Form /> */}
        <Paintings paintings={paintings} />
      </div>
    );
  }
}

export default App;
