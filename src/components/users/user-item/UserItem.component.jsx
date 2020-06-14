import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserItem.styles.css";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // coming from Users state
  return (
    <div className="card text-center">
      <img className="round-img" src={avatar_url} alt="alt" />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
