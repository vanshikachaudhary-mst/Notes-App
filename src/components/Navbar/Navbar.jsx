import React from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
     
      sessionStorage.clear(); 
      navigate('/', { replace: true });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand mx-3 " href="#">
          Notes
        </a>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item mx-3 ">
              {/* <a className="nav-link mx-3" href="#">
                Create
              </a> */}
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
