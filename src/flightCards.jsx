import React from 'react';
import flightsData from './flights.json';
const flights = flightsData.flights;

const FlightCards = () => {
    const flights = flightsData.flights;  // Ensure you are accessing the flights array

return (

<> 
 <div className=" w-[100]">
    {flights.map((flight, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-4 w-full max-w-md">
            <div className="flex items-center justify-between p-3">
                <h2 className="text-lg font-semibold">{flight.airline.name} - {flight.flight.number}</h2>
                <img src={flight.airline.logo} alt="Airline Logo" className="h-6 w-6"/>
            </div>
            <p className="text-gray-600">{flight.departure.city} ({flight.departure.iata}) → {flight.arrival.city} ({flight.arrival.iata})</p>
            <div className="mt-2 p-2 border-t border-gray-200">
                <div className="flex justify-between">
                    <span className="font-bold">Depart:</span>
                    <span>{flight.departure.scheduled} (Scheduled)</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Arrive:</span>
                    <span>{flight.arrival.scheduled} (Scheduled)</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Status:</span>
                    <span>{flight.flight_status}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Aircraft:</span>
                    <span>{flight.aircraft.iata}</span>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                </button>
            </div>
        </div>
    ))}
</div> 
</>







);
};

export default FlightCards;
