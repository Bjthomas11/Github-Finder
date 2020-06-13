import React from "react";
import "./UserItem.styles.css";

const UserItem = (props) => {
  // coming from Users state
  const { login, avatar_url, html_url } = props.user;
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
};

export default UserItem;
