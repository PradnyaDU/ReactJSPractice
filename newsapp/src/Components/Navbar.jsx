import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsCSS/NavbarCSS.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <h2 className="logo">
            <Link to="/">NewsHub</Link>
        </h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/health">Health</Link></li>
          <li><Link to="/science">Science</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
        </ul>
      </div>
    </nav>
  );
}
}
