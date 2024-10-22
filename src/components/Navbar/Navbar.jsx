import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      sessionStorage.clear();
      navigate("/", { replace: true });
    }
  };

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-3" href="">
          Notes
        </a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-3">
            <button className="btn btn-outline-secondary" onClick={handleClick}>
              Create
            </button>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
