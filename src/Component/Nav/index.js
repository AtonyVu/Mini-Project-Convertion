import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style/css.css";
export default class Nav extends Component {
  render() {
    return (
      <div className="Nav_container">
        <ul>
          <li>
            <Link to="/Mini-Project-Convertion">C2F</Link>
          </li>
          <li>
            <Link to="/Mini-Project-Convertion/C2K">C2K</Link>
          </li>
        </ul>
      </div>
    );
  }
}
