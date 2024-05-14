import { useLocation } from "react-router-dom";
import flights from './flights.json';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faLocationDot,faChevronDown,faChevronUp,faPlane} from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import Footer from "./footer";
import Header from "./header";
import { useState } from "react";
import { data } from "./flight";
import  "./style.css"
import FlightCards from "./flightCards";


const Flightdetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const [checkedState, setCheckedState] = useState({
      airIndia: false,
      allianceAir: false,
      indigo: false,
      spiceJet: false,
      airlineCombinations: false
  });
  const handleCheckboxChange = (event) => {
    setCheckedState({
        ...checkedState,
        [event.target.name]: event.target.checked
    });
  };
  const [sliderValue1, setSliderValue1] = useState(100);
      const [sliderValue2, setSliderValue2] = useState(100);
   
      const handleSliderChange1 = (event) => {
        setSliderValue1(event.target.value);
    };
  
    const handleSliderChange2 = (event) => {
        setSliderValue2(event.target.value);
    };
   
  const sliderStyle1 = {
    background: `linear-gradient(to right, #1e40af 0%, #1e40af ${sliderValue1}%, #e5e7eb ${sliderValue1}%, #e5e7eb 100%)`
  };
  
  const sliderStyle2 = {
    background: `linear-gradient(to right, #1e40af 0%, #1e40af ${sliderValue2}%, #e5e7eb ${sliderValue2}%, #e5e7eb 100%)`
  };
  
    const searchData = data();
    console.log(searchData);

return(
    <>
     <Header/>
   
        <div className="relative">
    <div className="flex absolute top-[2vh] gap-[8px] mx-[2rem]">
        <div className="border-2 text-center bg-cyan-900 text-white rounded-lg h-[44px] w-[70px] flex justify-center items-center">
            <p>Flights</p>
        </div>
        <div className="border-2 text-center bg-cyan-900 text-white rounded-lg h-[44px] w-[70px] flex justify-center items-center">
            <p>Lorem</p>
        </div>
    </div>

    <div className="h-[55px] w-[70%] rounded-lg flex items-center justify-center border-2 bg-slate-800 absolute top-[8vh] mx-[2rem] space-x-4 gap-[15rem]">
    <div className="flex">
    <p className="text-white text-sm font-medium tracking-wide">  {searchData.from || 'N/A'} -</p>
    <p className="text-white text-sm font-medium tracking-wide">  {searchData.to || 'N/A'}</p>
    </div>
    <div>
    <p className="text-white text-sm font-medium   tracking-wide">Date: {searchData.date || 'N/A'}</p>
    </div>
</div>


<div class="absolute top-[17vh] right-[28vw]  inline-block text-left ">
        <label for="sortby" class="block text-sm font-medium text-gray-700 ">Sort by:</label>
        <div class="mt-1 relative border-2 border-black rounded-lg w-[12rem]">
          <select id="sortby" name="sortby" class="block appearance-none w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="best">Best</option>
            <option value="outboard">Outboard Departure Time</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="dropdown-icon h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

</div>
{/*start of sort filters */}
<div className=" relative w-[350px]">
<div className="absolute top-[30vh] mx-4 my-2">
            <div className=" h-[200px] w-[350px] bg-white shadow-lg rounded-lg border border-gray-300">
                <button onClick={toggleDropdown} className="w-full flex justify-between items-center text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-t-lg">
                    <span>Stops</span>
                    {isOpen ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                    )}
                </button>
                {isOpen && (
                    <div className="p-4">
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4"/>
                                <span className="text-sm">Direct</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4"/>
                                <span className="text-sm">1 stop</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4"/>
                                <span className="text-sm">2 stops</span>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
   {/* filter 2 */}
        <div className="absolute top-[61vh] rounded-lg ml-[20px] h-[270px] w-[350px] bg-white border border-gray-300 shadow-lg  ">
            <div 
                className="flex justify-between rounded-lg items-center bg-blue-500 text-white px-4 py-2 cursor-pointer"
                onClick={toggleDropdown}
            >
                <span>Airlines</span>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>

            {isOpen && (
                <div className="p-4">
                    <div className="flex items-center space-y-2 flex-col">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="airIndia"
                                checked={checkedState.airIndia}
                                onChange={handleCheckboxChange}
                            />
                            <span>Air India</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="allianceAir"
                                checked={checkedState.allianceAir}
                                onChange={handleCheckboxChange}
                            />
                            <span>Alliance Air</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="indigo"
                                checked={checkedState.indigo}
                                onChange={handleCheckboxChange}
                            />
                            <span>Indigo</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="spiceJet"
                                checked={checkedState.spiceJet}
                                onChange={handleCheckboxChange}
                            />
                            <span>Spice Jet</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="airlineCombinations"
                                checked={checkedState.airlineCombinations}
                                onChange={handleCheckboxChange}
                            />
                            <span>Airline Combinations</span>
                        </label>
                    </div>
                </div>
            )}
        </div>
        {/* filter-2 end */}
        {/* slider 1 */}
        <div className="bg-white h-[200px] absolute rounded-lg top-[101vh]  ml-[20px] w-[350px] p-5 shadow-lg rounded-lg flex flex-col justify-center items-center">
                <h2 className="text-lg font-semibold">Departure Times</h2>
                <p className="text-sm text-gray-600 mb-4">Outbound</p>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue1}
                    onChange={handleSliderChange1}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle1}
                    />
                </div>
                {/* slider-1 end */}
                {/* slider-2 start*/}

                <div className="bg-white absolute top-[131vh] ml-[20px] h-[200px] w-[350px] p-4 shadow rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold text-gray-800">Journey Duration</h2>
        <p className="text-sm text-gray-500">3.5hrs-31.5hrs</p>
        <input
            type="range"
            min="0"
            max="100"
            value={sliderValue2}
            onChange={handleSliderChange2}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={sliderStyle2}
                    />
                </div>
  
        {/* slider-2 end */}
</div>
{/* cards */}

<div className="relative mx-[15px]">

<div className="flex gap-[11px] absolute top-[32vh] left-[25vw]   ">
              <div className="h-[100px]  w-[150px] border-2 border-black">
                  <p>ddkgjgef</p>
              </div>
              <div className="h-[100px]  w-[150px] border-2 border-black">
                <p>fhgejb</p>
              </div>   
              <FlightCards /> 

</div>





</div>


    
    
    </>




)


}
export default  Flightdetails
  