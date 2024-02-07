import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Datecontainer from "./Datecontainer";
import Searchbar from "./searchbar";
import axios from "axios"

function Itinerary(props){
  const tripid=props.tripid
  const username=props.username
  const startdate=props.startdate
  const enddate=props.enddate
  console.log(startdate,enddate);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDatee, setSelectedDatee] = useState(null);
    const [chabi,setchabi]=useState()
   
  
    
    function formatDatee(isoDateString) {
      const date = new Date(isoDateString);
      
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = date.getFullYear();
    
      return `${day}/${month}/${year}`;
    }
  const fsdate=formatDatee(startdate)
  const fedate=formatDatee(enddate)
  function formatDate(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    // console.log(dayOfMonth);
    return `${day},${dayOfMonth},${month},${year}`;
  }
  
  function createDateArray(startDate, endDate) {
    //console.log(startDate);
    const dateArray = [];
    let currentDate = new Date(startDate);
    let enddatee= new Date(endDate) 
   //console.log(currentDate);
    while (currentDate <= enddatee) {
      //console.log(currentDate);
      dateArray.push(formatDate(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dateArray;
  }
  const dateArray=createDateArray(startdate,enddate)
     
  //console.log(dateArray);
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

      const handleDateChangee = (date) => {
        setSelectedDatee(date);
      };

       const handlesetchabi=(index)=>{
        console.log(index);
          setchabi(index);
          console.log(chabi);
        
       }
    return (
        <>
          <div className="bg-white shadow p-4 py-8 border border-purple-300 rounded-lg" x-data="{ images: [] }">
          <div className="flex items-center justify-between m-5">
            <h1 className="font-bold text-2xl text-black bg-white border-none outline-none ">Itinerary</h1>
            <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2">
            <DatePicker
        id="date"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText={fsdate}
        className="w-28  py-1 px-1 rounded-full bg-purple-500  focus:ring focus:ring-purple-300 focus:outline-none placeholder-white"
      />
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2">
            <DatePicker
        id="date"
        selected={selectedDatee}
        onChange={handleDateChangee}
        dateFormat="yyyy-MM-dd"
        placeholderText={fedate}
        className="w-28  py-1 px-1 rounded-full bg-purple-500  focus:ring focus:ring-purple-300 focus:outline-none placeholder-white "
      />
            </button>
          
          </div>
          {dateArray.map((date,index)=>(
            <div key={index}>
          <Searchbar chabi={chabi} setchabi={()=>handlesetchabi(index)} date={date} tripid={tripid} username={username}/>
          </div>
          ))}
          
          </div>
        </>
    )
}

export default Itinerary