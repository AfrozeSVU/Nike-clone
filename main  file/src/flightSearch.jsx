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




let searchData = "";
const FlightSearch = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [count, setCount] = useState(0);
   const [showCalendar, setShowCalendar] = useState(false);
   const formatedDate = selectedDate ? selectedDate.toLocaleDateString('en-CA') : ""; // 'en-CA' uses the format 'YYYY-MM-DD'
  
   const searchResults = async () => {
    
    console.log(flightdetails);
    searchData = flightdetails.filter(
      (data) =>
        data.departure.iata == from &&
        data.arrival.iata == to &&
        data.flight_date ==  formatedDate
    );
    console.log(searchData);

    console.log(count);
    if (searchData) {
      const newCount = count + 1;
      setCount(newCount);
      navigate(`/cards/${newCount}`);
    }
  };

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);  
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); 
  };


  return (
    <>
   
     <div>
       <h3 className="text-center p-[40px] text-5xl font-semibold font-['Open_Sans']"> Flights</h3>
     </div>
   
    <div className="container h-[200px] w-[70%] bg-sky-100 rounded-lg  shadow-md   " >  
      <div className="row ">
        <div className="col-md-6 flex gap-[-2px] relative">

        {/* From starts */}
      <div className="from w-full mt-10 ml-[7px]">
        <label htmlFor="from" className="text-sky-400 font-semibold">From</label>
        <div className="relative w-full">
          <FontAwesomeIcon 
            icon={faPlaneDeparture} 
            className="absolute left-3 text-sky-400 z-10   " 
            style={{ pointerEvents: 'none', marginTop: '22px' }}
          />
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="  Enter city or airport"
            className="form-control h-[50px] pl-12 mt-1 "
            style={{ textAlign: "left" }}
            onFocus={(e) => {
              e.target.style.paddingLeft = "30px";  
            }}
            onBlur={(e) => {
              e.target.style.textAlign = "left";
              e.target.style.paddingRight = "0px";  
            }}
      
              />
            </div>
          </div>
          {/* from ends */}

            {/* icon */}
          <div className="arrow bg-sky-500 shadow-lg border-rounded relative flex justify-center items-center mt-[4.5rem] p-2 h-12 w-12 rounded-full z-10" >
            <i className="fa-solid fa-plane text-white text-2xl"></i>
          </div>
          {/* icon */}

            {/* TO Starts */}

            <div className="to w-full mt-10  ">
            <label htmlFor="to" className="text-sky-400 font-semibold">To</label>
            <div className="relative w-full">
              <FontAwesomeIcon 
                icon={faPlaneArrival} 
                className="absolute left-3 text-sky-400 z-10" 
                style={{ pointerEvents: 'none', marginTop: '22px' }}
              />
              <input
                type="text"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="  Enter city or airport"
                className="form-control h-[50px] pl-12 mt-1"
                style={{ textAlign: "left" }}
                onFocus={(e) => {
                  e.target.style.paddingLeft = "30px";  
                }}
                onBlur={(e) => {
                  e.target.style.textAlign = "left";
                  e.target.style.paddingRight = "0px";  
                }}  
              />
              </div>
              </div>
              {/* To ends */}

              </div>
           {/*  date picker starts*/}
            <div className="col-md-6 md:w-1/2  flex justify-center items-center" >
  
          <div className="date w-[21rem] relative  ">     
            <label htmlFor="date" className="text-sky-400 font-semibold mt-[40px] ml-[7px]"> Departure</label>
            <input
              id="departureDate"
              type="text"
              readOnly
              value={formatedDate}
              onClick={handleCalendarToggle}
              placeholder="Select a date"
              className="form-control mt-[5px] h-[50px] pr-[30px]"
              
              />
              <div className="input-group-append">
              <span className="input-group-text absolute right-[10px] top-[66%] z-5" onClick={handleCalendarToggle}   >
              <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
              </div>
               {showCalendar && (
                <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                className="custom-calendar shadow-lg absolute top-[80px] left-2.5 z-10 bg-white "
                
                    />
                  )}
                </div> 
              </div>
            </div>
          {/*  date-picker ends*/}

          {/* button starts */}
          <div className=" mt-[4rem] flex justify-center items-center ">
            <button
                className="search-button font-['Open_Sans'] bg-sky-500 text-white px-4 py-2 flex items-center justify-center rounded-md text-md  "
                onClick={searchResults}
      >  
                  <div className="svg-wrapper-1">
                      <div className="svg-wrapper" >
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass} 
                          className="flex justify-center items-center"
                        />
                      </div>
                    </div>

                <span className="text-xl ml-2 font-semibold">Search</span>
            </button>
          </div>
          {/* button ends */}

        </div>
        
        </>
      );
    };

    export default FlightSearch ;
    export const CardsData = () => searchData;
