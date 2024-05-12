import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { CardsData } from "./flightSearch";  
import { Link } from "react-router-dom";

export default function Cards() {
  const { id } = useParams();  
  const [flightData, setFlightData] = useState([]);  

  useEffect(() => {
    const data = CardsData(); 
    setFlightData(data); 
  }, [id]); 

  console.log("Flight Data:", flightData);  
   
  if (!flightData || flightData.length === 0) {
    return <p className="text-center p-[150px] text-2xl font-semibold font-serif"> No flight data available.</p>;
  }

   
  return (
      <div>
          
       <div className="items-center p-[55px] ">
        <h3  className=" text-center p-[20px]" >Best Departing Flights </h3>
        {flightData.map((flight, index) => (
      
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
          
        
        ))}
      </div>
         
    </div>
   
  );
}