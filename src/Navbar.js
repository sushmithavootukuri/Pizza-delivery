import { Link } from "react-router-dom";
import React from "react";
import Logout from "./LogoutPage"
const Navbar = ({ authentication, admin, setAdmin, setAuthentication }) => {


  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid bg-warning py-2">
        <h2 className="navbar-header site-name">Pizza Paradise</h2>
        <ul className="nav navbar-left">
          <li >
            <Link to="/" className="px-2">Home</Link>
          </li>
          <li >
            {authentication && <Link to="/menu" className="px-2 pr-3">Menu</Link>}
            {/* <Link to="/menu">Menu</Link> */}
          </li>
          <li >
            {admin && <Link to="/admin" className="px-2 pr-3">Admin</Link>}
            {/* <Link to="/admin">Admin</Link> */}
          </li>
          <li>
            {!authentication && <Link to="/login" className="px-2 pr-3">Login</Link>}
          </li>
          <li>
            {authentication && <Link to="/login" className="px-2 pr-3"><span onClick={() => {
              setAdmin(false);
              setAuthentication(false);
              Logout();
            }}>Logout</span></Link>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
