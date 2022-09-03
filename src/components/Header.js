import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";
import "../styles/Header-Footer.scss";
import Logo from "../img/spa-logotype.png";

function Header(props) {
  const { isLoggedIn, setIsLoggedIn } = props;

  const handleLogout = (event) => {
    event.preventDefault();
    logout(setIsLoggedIn);
  };

  return (
    <div id="header">
      <h1 id="header-text">FITNESS TRACKER</h1>
      <nav>
        <ul id="nav-list">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink
              to="activities"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              ACTIVITIES
            </NavLink>
          </li>

          <li>
            <NavLink
              to="routines"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              ROUTINES
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink
                to="/myroutines"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                MY ROUTINES
              </NavLink>
            </li>
          ) : null}

          <li>
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/"
                  onClick={(event) => handleLogout(event)}
                  style={({ isActive }) => ({
                    textDecoration: isActive ? "underline" : "none",
                  })}
                  //   onClick={handleLogout}
                >
                  LOGOUT
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                LOGIN
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
