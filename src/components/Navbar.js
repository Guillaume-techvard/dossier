// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink className="a" to="/guide1">Guide 1</NavLink>
        </li>
        <li>
          <NavLink className="a" to="/guide2">Guide 2</NavLink>
        </li>
        <li>
          <NavLink className="a" to="/guide3">Guide 3</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
