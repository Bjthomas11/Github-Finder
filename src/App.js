import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.component";
import Users from "./components/users/Users.component";
import "./App.css";

class App extends Component {
  // render = lifecycle method when page is loaded
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
