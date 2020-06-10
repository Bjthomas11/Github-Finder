import React, { Component } from "react";
import UserItem from "./UserItem.component";
import "./Users.styles.css";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "Mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://api.github.com/users/mojombo"
      },
      {
        id: "2",
        login: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://api.github.com/users/defunkt"
      },
      {
        id: "3",
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://api.github.com/users/pjhyett"
      }
    ]
  };
  render() {
    const { users } = this.state;
    return (
      <div className="users">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
