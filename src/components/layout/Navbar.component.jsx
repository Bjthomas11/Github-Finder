import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.styles.css";

class Navbar extends Component {
  // default props that override any props already
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
  };

  // Proptypes are type checking
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
