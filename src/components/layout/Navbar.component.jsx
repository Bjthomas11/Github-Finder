import React from "react";
import PropTypes from "prop-types";
import "./Navbar.styles.css";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

// default props that override any props already
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// Proptypes are type checking
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
