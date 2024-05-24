import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const Header = ({ isOpen, handleClick }) => {
  return (
    <div className="navbar">
      {isOpen ? (
        <RxCross2 className="menu" size={30} onClick={handleClick} />
      ) : (
        <MdMenu size={30} className="menu" onClick={handleClick} />
      )}
      <div className="navLinks">
        <NavLink exact to="/" className="link ">
          Home
        </NavLink>
        <NavLink exact to="/about" className="link">
          About
        </NavLink>
        <NavLink exact to="/services" className="link">
          Services
        </NavLink>
      </div>
      <div className="flex">
        <NavLink exact to="/signin" className="link signin">
          Sign In
        </NavLink>
        <CgProfile className="menu" size={35}/>
      </div>
    </div>
  );
};

export default Header;
