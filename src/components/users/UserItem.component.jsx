import React, { Component } from "react";
import "./UserItem.styles.css";
class UserItem extends Component {
  render() {
    //   destructing (pulling values from state)
    // coming from Users state
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img className="round-img" src={avatar_url} alt="alt" />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
