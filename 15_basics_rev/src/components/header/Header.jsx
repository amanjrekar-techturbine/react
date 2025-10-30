import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className={({isActive}) => `nav-item nav-link  ${(isActive) ? "active text-danger" : "" }`} href="#">
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `nav-item nav-link  ${(isActive) ? "active text-danger" : "" }`} href="#">
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `nav-item nav-link  ${(isActive) ? "active text-danger" : "" }`} href="#">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
