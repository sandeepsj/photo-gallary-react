//import InnerApp from './component/app'
import InnerApp from "./component/loginApp";
import "./App.css";
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <InnerApp />
      </div>
    );
  }
}

export default App;
