import React from "react";
import { Link } from "react-router-dom";
import { GiPeanut } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link to="/" className="d-flex align-items-center">
          <GiPeanut />
          <h1 className="d-inline mx-2">Peanuts</h1>
        </Link>
        <ul className="navbar-nav gap-4 mx-5 text-capitalize ">
          <li className="nav-item lead">
            <Link to="/">home</Link>
          </li>
          <li className="nav-item lead">
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
