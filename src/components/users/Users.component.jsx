import React, { useContext } from "react";
import UserItem from "./user-item/UserItem.component";
import Spinner from "../layout/spinner/Spinner.component";
import GithubContext from "../../context/github/githubContext.js";
import "./Users.styles.css";

const Users = (props) => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="users">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
