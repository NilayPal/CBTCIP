
import '../../Css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/Auth';


const Navbar = () => {

const [auth, setAuth]= useAuth()
const handelLogout = ()=>{
setAuth({
  ...auth,
  user:null,
  token:"",
});
localStorage.removeItem("auth");
alert("Logout Succesfull");
}

  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
           💒 Logo
          </Link>
        
          <ul   className="navbar-nav ms-auto mb-3 mb-lg-0" >
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                aria-current="page"
                // activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/service"
                className="nav-link"
                aria-current="page"
               // activeClassName="active"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/event"
                className="nav-link"
               // activeClassName="active"
              >
                Book Event
              </NavLink>
            </li>
           {
            !auth.user ? (<>
              <li className="nav-item">
              <NavLink
                to="/register"
                className="nav-link"
               // activeClassName="active"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
               // activeClassName="active"
              >
                Login
              </NavLink>
            </li>
            </>) :(<>
              <li className="nav-item">
              <NavLink onClick={handelLogout}
                to="/login"
                className="nav-link"
               // activeClassName="active"
              >
                Logout
              </NavLink>
            </li>
            </>)
           }
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
               // activeClassName="active"
              >
                Contact
              </NavLink>
            </li>

           

          </ul>
        </div>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
