import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand mx-3 " href="#">
          Notes
        </a>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">
                Create
              </a>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
