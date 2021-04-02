import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/add">
                Add User
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/list">
                User List
              </NavLink>

            </li>
          </ul>
        </div>
      </nav>
    
  );
};

export default NavBar;
