import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass ,faCalendarAlt,faPlaneArrival, faPlaneDeparture} from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import flightdetails from "./flights.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cards from "./cards";
import Flights from "./flights.json";
 
import Calendar from "react-calendar";  
import "react-calendar/dist/Calendar.css"; 
import FlightDetails from "./flightdetails";
import  Menu from './images/menu-icon.svg'
import  Logo from './images/flyamore_logo.png'
import User from './images/user.svg'
import Globe from './images/globe.svg'
import ImgFlight from './images/flight.jpg'

const Flight = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<FlightSearch></FlightSearch>}></Route>
      <Route
        path="/flight-details/:flightId"
        element={<FlightDetails></FlightDetails>}
      ></Route>
    </Routes>
  </Router>
  );
};


export const FlightSearch =() =>{
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [count, setCount] = useState(0);
    const [showCalendar, setShowCalendar] = useState(false);
    const [searchData, setSearchData] = useState();//new
    const formatedDate = selectedDate ? selectedDate.toLocaleDateString('en-CA') : ""; // 'en-CA' uses the format 'YYYY-MM-DD'
    
    const searchResults = async () => {
        console.log(flightdetails);
        const search = flightdetails.filter(
          (data) =>
            data.departure.iata == from &&
            data.arrival.iata == to &&
            data.flight_date == formatedDate
        );
        setSearchData(search);
        console.log(searchData);
      };

      const handleSearch = () => {                   
        console.log("Searching for:", { from, to, selectedDate });
      };
      const handleCalendarToggle = () => {
        setShowCalendar(!showCalendar); // Toggle calendar visibility
      };
    
      const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowCalendar(false); // Hide calendar after date selection
      };
    
      return(
      
      <> 
          <div className="header_1 w-full h-[10vh] bg-white">
           
           <div className='absolute   left-[1vw] top-[-9vh]  h-[15vh] w-[15vw]'>     
        <img src= {Logo}   alt="" />
        </div>


        {/* RIGHT MENU */}
        <div className=' absolute   right-[1vw]   top-[22px]   flex gap-[20px] mx-[22px]'>
            <div className="items-center">
            <img src={Globe} alt="" />
            </div>

            <div className="gap-[3px] flex">
            <div className='item-center'>
            <img src={User} alt="" />
       
            </div>
            <div className="item-center">
            <p  className="items-center">Log in</p>
            </div>
            </div>

            <div className='items-center  '>
            <img src={Menu} alt="" />
            </div>    
            </div>

          </div>
            {/*  h-[60vh] w-[100vw] arrange properly vh, vw  */}
            <div className='h-[60vh] w-[100%] border-[2px] bg-fuchsia-950 relative'>
          {/* LOGO */}
       
        
       
        {/* buttons */}
        <div className='flex  '>
            <div className='border-2 text-center  text-white rounded-full h-[30px] w-[80px]  absolute top-[13vh] left-[7vw]' >
                <p>flights</p>

            </div>
            <div className='border-2 text-center  text-white rounded-full h-[30px] w-[80px]  absolute top-[13vh] left-[13vw]' >
                <p>Lorem</p>

            </div>
        </div>

        {/* TagLine */}
        <div className='absolute top-[20vh] left-[7vw] text-white'>
            <p className='text-3xl '> Lorem ipsum dolor sit amet consectetur adipisicing elit.  .</p>
        </div>
        {/* inputs */}
       {/* From */}
        <div className="container absolute top-[31vh] left-[7vw] rounded-t-lg ">
          <div className="row ">
            <div className="col-12 col-md-3 bg-white  border-2  h-[30px] border-2 h-[60px]  ">
            <label htmlFor="from"  className="text-black font-semibold">From</label>
            <input
     type="text"
     id="from"
     value={from}
     onChange={(e) => setFrom(e.target.value)}
     placeholder="  Enter city or airport"
     className="form-control top-[32vh] left-[8vh] h-[20px]   "
     style={{ textAlign: "left" }}
     

       />
        </div>
     {/* To */}
    <div className="col-12 col-md-3 bg-white  border-2 h-[60px] ">
    <label htmlFor="to"  className="text-black font-semibold">To</label>
            <input
     type="text"
     id="to"
     value={to}
     onChange={(e) => setTo(e.target.value)}
     placeholder="  Enter city or airport"
     className="form-control top-[32vh] left-[8vh] h-[20px]   "
     style={{ textAlign: "left" }}
     

       />
      
      </div>

    <div className="col-12 col-md-3 bg-white  border-2 h-[60px]  " >
    <label htmlFor="date" className="text-black font-semibold "> Departure</label>
    <input
       id="departureDate"
       type="text"
       readOnly
       value={formatedDate}
       onClick={handleCalendarToggle}
       placeholder="Select a date"
       className="form-control top-[32vh] left-[8vh] h-[20px] "
       
       />
        {showCalendar && (
         <Calendar
         onChange={handleDateChange}
         value={selectedDate}
         className="custom-calendar shadow-lg absolute top-[80px] left-2.5 z-10 bg-white "
         
             />
           )}

      
      </div>
    <div className="col-12 col-md-3 h-[60px] flex justify-center items-center  ">
    <button 
    className="text-white font-['Open_Sans'] text-center h-[50px] w-[80px] border-2 border-white  rounded-md text-md"
    onClick={searchResults}
    >
    
      <span className="text-xl ml-2 font-semibold">Search</span>
      </button> 
    
        </div>
        </div>
        </div>
       
       
{/* end of input */}


{/*filter  */}
<div class="flex items-center absolute top-[46vh] left-[5vw] ">
        <input type="checkbox" id="directFlights" class="hidden peer" />
        <label for="directFlights" class="flex items-center cursor-pointer text-white">
        
            <span class="w-4 h-4 inline-block mr-2 rounded bg-white border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-transparent flex items-center justify-center">
 
                <svg class="hidden w-3 h-3 text-white peer-checked:block" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9">
                    <path d="M1 4.5L4 7.5L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            Direct Flights
        </label>
    </div>
       
   </div>

  {/* end of main div */}


  <div class="flex justify-center items-center my-5">
    <div class="h-10 w-64 bg-sky-500 border-2 border-white flex justify-center items-center mx-5 ">
        Explore Anywhere
    </div>
    <div class="h-10 w-64 bg-sky-500 border-2 border-white flex justify-center items-center mx-5">
        Staycations
    </div>
</div>


      <div className='image my-5  '>
        <img src={ImgFlight} 
      alt="" className="h-[60vh] w-[80%] object-cover mx-[9rem] "  />
      </div>

       {/* footer starts */}
     <footer class="bg-stone-300 text-white  mt-[10rem] ">
        <div class="container mx-auto py-6 px-4">
            <div class="flex flex-wrap mx-4">
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                   
                    <ul>
                    <li><a href="#" class="hover:text-white no-underline">Help</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline">Privacy Settings</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline">Log in</a></li>
                       
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0"> 
                    <ul>
                    <li><a href="#" class="hover:text-gray-300 no-underline"> Cookie policy</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline"> Privacy policy</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline">Terms of service</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline">Company Details</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="text-xl font-semibold mb-2">Company</h2>
                    <ul>
                  <li><a href="#" class="hover:text-gray-300 no-underline">  About Us</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline"> Why Flyamore</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline">Media</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline">Our  People</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline"> Security</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline">How  SkyScanner</a></li>
                         
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="text-xl font-semibold mb-2">Partners</h2>
                    <ul>
                        <li><a href="#" class="hover:text-gray-300 no-underline"> Work with us</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline"> Advertise with us</a></li>
                        <li><a href="#" class="hover:text-gray-300 no-underline"> Travel API's</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-8 text-xl  text-slate-50 text-center">
                <p> © Flyamore </p>
            </div>
        </div>
    </footer>
    {/* footer ends */}










   {searchData && <Cards data={searchData}></Cards>}




      </>

      );


};
 

export default Flight