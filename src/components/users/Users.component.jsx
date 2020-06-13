import React from "react";
import UserItem from "./user-item/UserItem.component";
import Spinner from "../layout/spinner/Spinner.component";
import PropTypes from "prop-types";
import "./Users.styles.css";

const Users = (props) => {
  const { users, loading } = props;
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
