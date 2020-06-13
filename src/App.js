import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.component";
import Users from "./components/users/Users.component";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    // data log
    console.log(res.data);

    this.setState({
      users: res.data,
      loading: false,
    });
  }
  // render = lifecycle method when page is loaded
  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
