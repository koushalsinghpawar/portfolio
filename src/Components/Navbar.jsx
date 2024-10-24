import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container nav_bar ">
        <div className="letf nav_item ">PORTFOLIO</div>
        <div className="right">
          <Link to="/" className="nav_item">
            Home{" "}
          </Link>
          <Link to="/about" className="nav_item">
            About{" "}
          </Link>
          <Link to="/Skills" className="nav_item">
            Skills
          </Link>
          <Link to="/Project" className="nav_item">
            Project
          </Link>
          <Link to="/contects" className="nav_item">
            Contects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
