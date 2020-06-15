import React, { Fragment } from "react";
import Search from "../../search/Search.component.jsx";
import Users from "../../users/Users.component.jsx";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
