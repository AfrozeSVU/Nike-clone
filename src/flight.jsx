import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCalendarAlt,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import flightdetails from "./flights.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Toggle from  "./images/toggle.svg";

import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
 
import Flights from "./flights.json";
 
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FlightDetails from "./flightdetails";
import Menu from "./images/menu-icon.svg";
import Logo from "./images/flyamore_logo.png";
import User from "./images/user.svg";
import Globe from "./images/globe.svg";
import ImgFlight from "./images/flight.jpg";
import Footer from "./footer";
import Header from "./header";

const Flight = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightSearch></FlightSearch>}></Route>
        <Route
          path="/flight-details"
          element={<FlightDetails></FlightDetails>}
        ></Route>
      </Routes>
    </Router>
  );
};

let form={}
export const FlightSearch = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleClick = () => {
    // Swap the values of 'from' and 'to'
    setFrom(to);
    setTo(from);
    setIsSwapped(!isSwapped); // Toggle the swap state
  };
  const navigate= useNavigate("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [count, setCount] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchData, setSearchData] = useState(); //new
  const [formData, setFormData] = useState({
    from: "",
    to: "",
   date:"",
});
  const formatedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-CA")
    : ""; // 'en-CA' uses the format 'YYYY-MM-DD'

  const searchResults = async () => {
  
    
    if (formData) {
      form = formData;
      console.log(form);
      navigate("/flight-details");
    }
    

    }
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

  const handleSearch = () => {
    console.log("Searching for:", { from, to, selectedDate });
  };
  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar); // Toggle calendar visibility
  };

 
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
    setFormData(prevData => ({
      ...prevData,
      date: date.toLocaleDateString("en-CA")  // Assuming you want to store formatted date
    }));
  };
  
  





  return (
    <>
     
     <Header></Header>

      {/*  h-[60vh] w-[100vw] arrange properly vh, vw  */}
      <div className="h-[60vh] w-[100%] border-[2px]  relative  bg-gradient-to-r from-slate-900 from-10% to-cyan-700 to-80%   ">
      
        {/* LOGO */}

        {/* buttons */}
        <div className="flex left-[1vw]  ">
          <div className="border-2 text-center absolute top-[8vh] text-white rounded-full h-[30px] w-[80px]  absolute top-[13vh] left-[7vw]">
            <p>Flights</p>
          </div>
          <div className="border-2 text-center absolute top-[8vh] text-white rounded-full h-[30px] w-[80px]  absolute top-[13vh] left-[13vw]">
            <p>Lorem</p>
          </div>
        </div>

        {/* TagLine */}
        <div className="absolute top-[17vh] left-[7vw] text-white">
          <p className="text-4xl font-serif font-bold ">
            {" "}
            Find Your Travel Buddy
          </p>
        </div>
        {/* inputs */}
        {/* From */}
        <div className="container absolute top-[29vh] left-[7vw] rounded-t-lg ">
          <div className="row ">
          <div className="From col-12 col-md-3 bg-white h-[60px] border-[2.5px] border-slate-700 rounded-l-lg  hover:border-3 hover:border-white transition duration-150">
          <label htmlFor="from" className="text-black font-semibold h-[2px] ">
        From
    </label>
    <input
  type="text"
  name="from"
  id="from"
  value={formData.from}
              onChange={handleInputChange}
  placeholder="Enter city or airport"
  className="w-full h-7 px-3 py-2 text-base text-black placeholder-gray-400 bg-white border-none focus:outline-none focus:ring-0 focus:border-none"
/>

</div>

       
<div
  className="col-1 col-md-1 d-flex justify-content-center align-items-center border-[2.5px] border-slate-700 bg-white   hover:border-white"
  style={{ width: "auto" }}
>
  <button
    type="button"
    className="bg-gray-200 rounded-full p-2 focus:outline-none"
    onClick={handleClick}
    style={{ width: "auto", borderRadius: "50%" }}
  >
    {/* toggle */}
    <div className={`w-6 h-6 text-gray-600 transition-transform duration-300 transform ${isSwapped ? 'rotate-180' :''} hover:rotate-360`}>
      <img src={Toggle} alt="" />
    </div>
  </button>
</div>


            {/* To */}
            <div className="To col-12 col-md-3 bg-white h-[60px] border-[2.5px]   border-slate-700  hover:border-white  transition duration-150">
            <label htmlFor="To" className="text-black font-semibold h-[2px] ">
              To
            </label>
            <input
          type="text"
          name="to"
          id="to"
          value={formData.to}
              onChange={handleInputChange}
          placeholder="Enter city or airport"
          className="w-full h-7 px-3 py-2 text-base text-black placeholder-gray-400 bg-white border-none focus:outline-none focus:ring-0 focus:border-none"
        />

</div>


    <div className="col-12 col-md-3 bg-white h-[60px]   rounded-r-lg border-slate-700  border-[2.5px]  hover:border-white  transition duration-150 ">
      <label htmlFor="date" className="text-black font-semibold h-[2px]">
        {" "}
        Departure
      </label>
      <input
        id="departureDate"
        type="text"
        name="date"
        readOnly
        value={formData.date}
           
        onClick={handleCalendarToggle}
        placeholder="Select a date"
        className="w-full h-7 px-3 py-2 text-base text-black placeholder-gray-400 bg-white border-none focus:outline-none focus:ring-0 focus:border-none"
      />
      {showCalendar && (
        <Calendar
        // onChange={handleInputChange}
        //   value={selectedDate}
        onChange={handleDateChange}
        value={selectedDate}
          name="date"
      
          className="custom-calendar shadow-lg absolute top-[80px] left-2.5 z-10 bg-white "
        />
      )}
    </div>
    <div className="col-12 col-md-2 absolute right-[2vw] h-[60px] text-center  flex justify-center items-center">
    <button
        className="text-white hover:bg-slate-700 bg-slate-950 font-roboto text-center h-[50px] w-[80px]    rounded-md text-sm flex justify-center items-center"
        onClick={searchResults}
    >
        <span className="text-lg font-semibold ">Search</span>
    </button>
</div>



          </div>
        </div>

        {/* end of input */}

        {/*filter  */}
        <div class="flex items-center absolute top-[44vh] left-[7vw]">
          <input type="checkbox" id="directFlights" class="hidden peer" />
          <label
            for="directFlights"
            class="flex items-center cursor-pointer text-white"
          >
            <span class="w-4 h-4 inline-block mr-2 rounded bg-white border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-transparent flex items-center justify-center">
              <svg
                class="hidden w-3 h-3 text-white peer-checked:block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 9"
              >
                <path
                  d="M1 4.5L4 7.5L11 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Direct Flights
          </label>
        </div>
      </div>

      {/* end of main div */}

      <div class="flex justify-center items-center my-5">
    <div class="h-[4rem] w-[19rem] bg-cyan-700 border-2 border-white text-white font-semibold font-roboto text-lg
    rounded-lg flex justify-center items-center mx-5 hover:bg-sky-600 hover:scale-105 transition duration-300">
      Explore Anywhere
    </div>
    <div class="h-[4rem] w-[19rem] bg-cyan-700 border-2 border-white text-white font-semibold font-roboto text-lg
    rounded-lg flex justify-center items-center mx-5 hover:bg-sky-600 hover:scale-105 transition duration-300">
      Staycations
    </div>
</div>


      <div className="image my-5  ">
        <img
          src={ImgFlight}
          alt=""
          className="h-[60vh] w-[80%] object-cover mx-[9rem] "
        />
      </div>

{/* footer */}
      
       <Footer></Footer>


      {/* footer ends */}
      {/* search filter below */}

      {/* {searchData && <Cards data={searchData}></Cards>} */}
    </>
  );
};


export default Flight;
export const data = () => form;
