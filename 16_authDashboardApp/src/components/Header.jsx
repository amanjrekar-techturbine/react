import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();

  const navigate = useNavigate()

 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {user ? (
              <div className="d-flex align-items-center">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-item nav-link  ${isActive ? "active text-danger" : ""}`
                  }
                >
                  Home
                </NavLink>
                <h3 className="">Hello, {user.username}</h3>
                <button onClick={() => {logout();  navigate("/login")}}>Logout</button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `nav-item nav-link  ${isActive ? "active text-danger" : ""}`
                  }
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
