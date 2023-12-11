import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import '../Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-top-right">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            {/* <ul className="navbar-nav"> */}
              {/* <li className="nav-item"> */}
                <NavLink to="/logout" className="nav-link">
                  <button className="btn btn-outline-light btn-lg btn-logout"><span><MdLogout /></span></button>
                </NavLink>
              {/* </li> */}
            {/* </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
