 
import  Menu from './images/menu-icon.svg'
import  Logo from './images/flyamore_logo.png'
import User from './images/user.svg'
import Globe from './images/globe.svg'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass ,faCalendarAlt,faPlaneArrival, faPlaneDeparture} from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import flightdetails from "./flights.json";
// import "./button.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cards from "./cards";
import Flights from "./flights.json";
 import Navbar from "./navbar";
import Calendar from "react-calendar";  
import "react-calendar/dist/Calendar.css"; 
 import FlightDetails from "./flightdetails";



const Flight = () => {
  





  return (
    <>
      {/*  h-[60vh] w-[100vw] arrange properly vh, vw  */}
      <div className='h-[60vh] w-full border-[2px] bg-sky-200 relative'>
          {/* LOGO */}
        <div className='absolute  left-[4vw] top-[-8vh]  h-[15vh] w-[15vw]'>     
        <img src= {Logo}   alt="" />
        </div>
        {/* RIGHT MENU */}
        <div className=' absolute   right-[3vw]   p-[40px] flex gap-[20px] '>
            <div>
            <img src={Globe} alt="" />
            </div>
            <div className='flex'>
            <img src={User} alt="" />
            <p>Log in</p>
            </div>
            <div className='items-center  '>
            <img src={Menu} alt="" />
            </div>    
            </div>
        {/* buttons */}
        <div className='flex  '>
            <div className='border-2 text-center  rounded-lg h-[30px] w-[80px]  absolute top-[13vh] left-[7vw]' >
                <p>flights</p>

            </div>
            <div className='border-2 text-center  rounded-lg h-[30px] w-[80px]  absolute top-[13vh] left-[15vw]' >
                <p>Lorem</p>

            </div>
        </div>

        {/* TagLine */}
        <div className='absolute top-[20vh] left-[7vw] '>
            <p className='text-3xl '> Lorem ipsum dolor sit amet consectetur adipisicing elit.  .</p>
        </div>
        {/* inputs */}
        <div className="container h-[200px] w-[70%] bg-sky-100 rounded-lg  shadow-md  ">
      
      <div className="row ">
        
        <div className="col-md-6 flex gap-[-2px]  ">
          {/* From Starts */}
          <div className="from w-full mt-10 ml-[7px] relative ">
            <label htmlFor="from"  className="text-sky-600 font-semibold">From</label>
            <div className="relative w-full">
          <FontAwesomeIcon 
            icon={faPlaneDeparture} 

            className="absolute left-3 text-sky-400 z-10  mt-[22px]  " 
             
          />
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="  Enter city or airport"
            className="form-control h-[50px] pl-16 mt-1 "
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

          {/* icon ends */}

           {/* TO Starts */}
          <div className="to w-full mt-10 ">
          <label htmlFor="to" className="text-sky-600 font-semibold">To</label>
            <div className="relative w-full">
              <FontAwesomeIcon 
                icon={faPlaneArrival} 
                className="absolute left-3 text-sky-400 z-10 mt-[22px]" 
                 
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
        <div className="col-md-6 md:w-1/2  flex justify-center items-center">
     
        <div className="date w-[21rem] relative  ">     
            <label htmlFor="date" className="text-sky-600 font-semibold mt-[40px] ml-[7px]"> Departure</label>
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

      
      {searchData && <Cards data={searchData}></Cards>}
    </div>
 {/* end of input */}
        
 
 
    </div>
    {/* end of main div */}

       <div className='mini-div mt-[3rem] gap-[20px] flex ' >
        <div className='h-[40px] w-[260px] bg-sky-500'>

        </div>
        <div className='h-[40px] w-[260px] bg-sky-500'>

        </div>

       </div>
      <div className='image h-[400px] w-full bg-black mt-[60px]'>


      </div>


    {/* footer starts */}
     <footer class="bg-cyan-950 text-white mt-[20px]">
        <div class="container mx-auto py-6 px-4">
            <div class="flex flex-wrap mx-4">
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="text-xl font-semibold mb-2">About Us</h2>
                    <ul>

                        <li><a href="#" class="hover:text-gray-300">Team</a></li>
                        <li><a href="#" class="hover:text-gray-300">Careers</a></li>
                        <li><a href="#" class="hover:text-gray-300">Internship</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="text-xl font-semibold mb-2">For Students</h2>
                    <ul>
                        <li><a href="#" class="hover:text-gray-300">Internships</a></li>
                        <li><a href="#" class="hover:text-gray-300">Online Trainings</a></li>
                        <li><a href="#" class="hover:text-gray-300">Certifications</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="text-xl font-semibold mb-2">For Employers</h2>
                    <ul>
                        <li><a href="#" class="hover:text-gray-300">Hire Interns</a></li>
                        <li><a href="#" class="hover:text-gray-300">Hire Freshers</a></li>
                        <li><a href="#" class="hover:text-gray-300">Online Assessments</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="text-xl font-semibold mb-2">Connect With Us</h2>
                    <ul>
                        <li><a href="#" class="hover:text-gray-300">Contact Us</a></li>
                        <li><a href="#" class="hover:text-gray-300">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-gray-300">FAQs</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-8 text-xl  text-slate-50 text-center">
                <p> ©  Made with Love by SMAC</p>
            </div>
        </div>
    </footer>
    {/* footer ends */}
    </>
  )
}

export default Flight










 
// {/* <div className="container  absolute left-[7vw] top-[33vh] h-[80px]  w-[65%] bg-white rounded-lg  shadow-md   flex">
      
// <div className="row  ">
//            {/* From Starts */}


//    <div className="col-md-4  from h-[78px]  bg-black ">
//      <label htmlFor="from"  className="text-white font-semibold">From</label>
//      <div className=" bg-sky-400 ">
//    <FontAwesomeIcon 
//      icon={faPlaneDeparture} 

//      className="absolute left-3 text-sky-400 z-10  mt-[22px]  " 
      
//    />
//    <input
//      type="text"
//      id="from"
//      value={from}
//      onChange={(e) => setFrom(e.target.value)}
//      placeholder="  Enter city or airport"
//      className="form-control h-[78px]  "
//      style={{ textAlign: "left" }}
//      onFocus={(e) => {
//        e.target.style.paddingLeft = "30px";  
//      }}
//      onBlur={(e) => {
//        e.target.style.textAlign = "left";
//        e.target.style.paddingRight = "0px";  
//      }}

//        />
//      </div> 

//      <div className="arrow bg-sky-500 shadow-lg border-rounded relative flex justify-center items-center mt-[4.5rem] p-2 h-12 w-12 rounded-full z-10" >
//      <i className="fa-solid fa-plane text-white text-2xl"></i>
//    </div>

//    </div>
//     {/* from ends */}

//     {/* icon */}
   

//    {/* icon ends */}
   

    
//                  {/* TO Starts */}


//    <div className=" col-md-4 to w-full mt-10 ">
//    <label htmlFor="to" className="text-sky-600 font-semibold">To</label>
//      <div className="relative w-full">
//        <FontAwesomeIcon 
//          icon={faPlaneArrival} 
//          className="absolute left-3 text-sky-400 z-10 mt-[22px]" 
          
//        />
//        <input
//          type="text"
//          id="to"
//          value={to}
//          onChange={(e) => setTo(e.target.value)}
//          placeholder="  Enter city or airport"
//          className="form-control h-[50px] pl-12 mt-1"
//          style={{ textAlign: "left" }}
//          onFocus={(e) => {
//            e.target.style.paddingLeft = "30px";  
//          }}
//          onBlur={(e) => {
//            e.target.style.textAlign = "left";
//            e.target.style.paddingRight = "0px";  
//          }}  
//        />
//        </div>           
//    </div>
//       {/* To ends */}


// {/*  date picker starts*/}

//  <div className="col-md-4  date w-[21rem] relative  ">     
//      <label htmlFor="date" className="text-sky-600 font-semibold mt-[40px] ml-[7px]"> Departure</label>
//      <input
//        id="departureDate"
//        type="text"
//        readOnly
//        value={formatedDate}
//        onClick={handleCalendarToggle}
//        placeholder="Select a date"
//        className="form-control mt-[5px] h-[50px] pr-[30px]"
       
//        />
//        <div className="input-group-append">
//        <span className="input-group-text absolute right-[10px] top-[66%] z-5" onClick={handleCalendarToggle}   >
//        <FontAwesomeIcon icon={faCalendarAlt} />
//        </span>
//        </div>
//         {showCalendar && (
//          <Calendar
//          onChange={handleDateChange}
//          value={selectedDate}
//          className="custom-calendar shadow-lg absolute top-[80px] left-2.5 z-10 bg-white "
         
//              />
//            )}
//          </div> 

//              {/*  date-picker ends*/}
//        </div>



// {/* button starts */}
// <div className=" mt-[4rem]  ]  ">
//      <button
//          className="search-button font-['Open_Sans'] bg-sky-500 text-white px-4 py-2 flex items-center justify-center rounded-md text-md  "
//          onClick={searchResults}
// >  
//            <div className="svg-wrapper-1">
//                <div className="svg-wrapper" >
//                  <FontAwesomeIcon
//                    icon={faMagnifyingGlass} 
//                    className="flex justify-center items-center"
//                  />
//                </div>
//              </div>

//          <span className="text-xl ml-2 font-semibold">Search</span>
//      </button>
//    </div>
//     {/* button ends */}


// {searchData && <Cards data={searchData}></Cards>}
// </div> */}