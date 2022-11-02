import React from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/logo.svg";

const Header = () => {
  let activeClass = {
    color: "#FF3811",
    background: "none",
  };
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar h-20 mt-8 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="">
            <img
              className="w-[108px] h-[86px]"
              src={navLogo}
              alt=""
              srcSet=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="">Bag</button>
          <button className="">Search</button>
          <button className="border border-[#FF3811] w-[170px] h-[56px] ml-7 rounded-[5px] text-[#FF3811] font-semibold hover:bg-[#FF3811] hover:text-white hover:duration-1650">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
