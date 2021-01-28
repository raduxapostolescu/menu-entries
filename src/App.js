import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { defaultData } from "./data/defaultData";
import FoodMenu from "./components/foodMenu";

class App extends Component {
  state = defaultData;

  render() {
    return (
      <React.Fragment>
        <Navbar sidebar={this.state.sidebar}></Navbar>

        <div className="container">
          <FoodMenu menuEntries={this.state.menuFood} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
