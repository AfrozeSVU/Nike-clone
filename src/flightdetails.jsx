  
import { useLocation } from "react-router-dom";
import flights from './flights.json';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import React from 'react'

const Flightdetails = () => {

  const { flightId } = useParams();
  const flight = flights.filter((data) => data.flight.number == flightId);

 return (
 <>

     <div>

       <div className="items-center p-[55px] ">
       <h3  className=" text-center p-[20px] font-['Open_Sans'] text-4xl font-semibold" > Flight Details </h3>
       {flight.map((flight, index) => (
     
       <div key={index}className="card_1  border border-gray-200 rounded-lg ml-[40px] mr-[40px] shadow-lg">
         <div className="flex gap-[40px]">
           <p className="text-xl p-[20px] font-medium"> Departure: {flight.flight_date}  </p>
          <p className="text-xl p-[20px] font-medium"> Status:{flight.flight_status}</p>
           </div>
                <div className=" px-[70px]">
                 <div className="flex gap-[14px]">
                <FontAwesomeIcon icon={faLocationDot} />

                  <p classname=" ">Time {flight.departure.airport} ({flight.departure.iata})</p> 
                  </div>
                  <div className="flex gap-[14px]">
                  <FontAwesomeIcon icon={faLocationDot} />
               <p>Time {flight.arrival.airport} ({flight.arrival.iata})</p> 
               </div>

                  
               </div>

           <div className="flex gap-[50px] p-[15px] ml-[20px]">
               <p> {flight.airline.name}</p>
               <p>{flight.flight.iata}</p>
              <p>{flight.aircraft.iata}</p>
               </div>
       </div>
   
   ))}
 </div> 
</div>

</>
    

 )
}

export default Flightdetails


