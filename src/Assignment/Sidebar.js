import React from "react";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink className="navlink link" to="/assignment1">
        Assignment-1
      </NavLink>
      <NavLink className="navlink link" to="/assignment2">
        Assignment-2
      </NavLink>
      <NavLink className="navlink link" to="/assignment3">
        Assignment-3
      </NavLink>
      <NavLink className="navlink link" to="/assignment4">
        Assignment-4
      </NavLink>
    </div>
  );
};

export default Sidebar;
