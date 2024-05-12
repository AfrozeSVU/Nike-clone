import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass ,faCalendarAlt,faPlaneArrival, faPlaneDeparture} from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import flightdetails from "./flights.json";
import "./button.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cards from "./cards";
import Flights from "./flights.json";
import Flightdetails from './flightdetails';
import Navbar from "./navbar";
import Calendar from "react-calendar";  
import "react-calendar/dist/Calendar.css"; 
import FlightSearch from "./flightSearch";
 

const Flight = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        {/* Flight Search */}
        <FlightSearch />
        <Routes>
          <Route path="/cards/:id" element={<Cards></Cards>}></Route>
          {/* <Route path="/flight-details
          " element={<Flightdetails></Flightdetails>}></Route> */}
          
        </Routes>
      </Router>
    </>
  );


};




export default Flight;


