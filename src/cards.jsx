import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";   
import { Link } from "react-router-dom";

export default function Cards({data}) {
   
  console.log("Flight Data:",  data);  
   
  if (!data || data.length === 0) {
    return <p className="text-center p-[150px] text-2xl font-semibold font-serif"> No flight data available.</p>;
  }

   
  return (
      <div>
      
       <div className="items-center p-[55px] ">
        <h3  className=" text-center p-[20px] font-['Open_Sans'] font-bold" >Best Departing Flights </h3>
        {data.map((flight, index) => (
      <Link
       className="no-underline text-black"
      to={`/flight-details/${flight.flight.number}`}
    >
            <div key={index}className="card_1  border border-gray-200 rounded-lg ml-[40px] mr-[40px] shadow-lg">
              <div className=" flex gap-[60px] p-[60px] ">
                <div>
                <p className=" text-2xl font-semibold"> {flight.airline.name}</p>
              
                <p className="text-lg text-center">{flight.flight_date}</p>
                </div>
                <div>
                <p className="card-text text-2xl font-medium">
                   {flight.departure.airport}  - {flight.arrival.airport}   </p>
                    
                  <p className="text-lg text-center"> {flight.departure.iata}-{flight.arrival.iata} </p>
          
                </div>
                 
              </div>
            </div>
            </Link> 
        
        ))}
      </div>
        
    </div>
   
  );
}