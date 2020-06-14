import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.component";
import Users from "./components/users/Users.component";
import User from "./components/user/user.component.jsx";
import Search from "./components/search/Search.component";
import Alert from "./components//layout//alert/Alert.component";
import About from "./components/pages/about/about.component.jsx";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  // search github users
  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  // GET single github user
  getUser = async (username) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    this.setState({
      user: res.data,
      loading: false,
    });
  };

  // GET users repos
  getUserRepos = async (username) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    this.setState({
      repos: res.data,
      loading: false,
    });
  };

  // clearing the state users
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  // setting alert when theres a 422(nothing found)
  setAlert = (message, type, close) => {
    this.setState({
      alert: { message, type, close },
    });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  // render = lifecycle method when page is loaded
  render() {
    const { loading, users, alert, user, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    repos={repos}
                    loading={loading}
                    getUserRepos={this.getUserRepos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
