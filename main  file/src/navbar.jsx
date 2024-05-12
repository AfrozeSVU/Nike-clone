import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg   ">
      <div class="container-fluid">
         
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" navbar-collapse collapse flex justify-center items-center " id="navbarNav">
          <ul class="navbar-nav  ">
            <li class="nav-item ">
              <a class="nav-link   "  aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item  ">
              <a class="nav-link  " href="#">
                Flights
              </a>
            </li>
            <li class="nav-item  ">
              <a class="nav-link  " href="#">
              Groups
              </a>
            </li>
             
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;