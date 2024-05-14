import React from 'react';
import flightsData from './flights.json';
 

const FlightCards = () => {

return (


<div className="w-[44rem] h-[180px] my-[120px] mx-[-320px]   ">
{flightsData.map((flight, index) => (
    <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg border-2  ">
        <div className="w-[33rem] flex items-center space-x-4">
            <img src={flight.airline.logo} alt="Airline Logo" className="h-10 w-10"/>
            <div className=' mx-[50px] '>
                <div className="flex space-x-2 ">
                    <p className="text-lg">{flight.departure.scheduled}</p>
                    <p className="text-sm">→</p>
                    <p className="text-lg">{flight.arrival.scheduled}</p>
                </div>
                <div className="flex space-x-8">
                    <p className="text-lg">{flight.departure.iata}</p>
                    <p className="text-lg">{flight.arrival.iata}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
                Select
            </button>
            <p className="mt-2 font-semibold">Active Groups</p>
            <p className="text-xl">10</p>
        </div>
    </div>
))}
</div>
 




 







);
};

export default FlightCards;
