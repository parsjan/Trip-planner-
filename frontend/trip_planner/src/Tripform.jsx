import React, { useState} from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
import Placesearchbar from "./Placesearchbar";
import axios from "axios";
function Tripform(){
     const location=useLocation()
     const username=location.state.username
    const navigate = useNavigate();
    const [startdate, setstartdate] = useState(null);
    const [enddate, setenddate] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const [invalidDate, setInvalidDate] = useState(false);
    const[selectplace,setplace]=useState("")
    const [lat,setlat]=useState()
    const [lan,setlan]=useState()
   // console.log(enddate);
   // console.log(startdate);
   
      const handlesubmit= async (e)=>{
        e.preventDefault();
        const data = {
          username:username,
      place:selectplace,
      startDate: startdate,
      endDate: enddate,
      tripType: selectedOption,
      lat:lat,
      lan:lan
        }
       // console.log(data.startDate);
       // console.log(data.endDate);
      //  console.log("handle submit tripform working");
        try {
         // console.log("inside handle sunmit tripform");
          const response = await axios.post('http://localhost:3000/tripform', data);
          const tripid= response.data.saveddoc.tripid
     //     console.log(response.data.saveddoc.startdate);
          const response1= await axios.post('http://localhost:3000/itinerary',{username:username,tripid:tripid,endDate:enddate,startDate:startdate})
          const respo=response.data;
          const respo1=response1.data
         // console.log(respo1,"hiiii");
        //  console.log(respo.saveddoc)
     //   console.log(respo.saveddoc.lat,respo.saveddoc.lan);
          navigate("/tripdashboard",{state:{saveddoc:respo.saveddoc}})
        } catch (error) {
          console.log(error)
        }
      }
      const handlePlaceSearch=(place,lat,lang)=>{
       // console.log(place)
        setplace(place)
        setlat(lat)
        setlan(lang)
      }
  
     const handleOptionChange = (event) => {
          setSelectedOption(event.target.value);
        };
    const handleDateChange = (date) => {
      setstartdate(date ? new Date(date.toISOString()) : null);
      if (enddate && date > enddate) {
        setenddate(null);
      }
      setInvalidDate(false);
      
    };
    const handleDateChangee = (date) => {
      if (startdate && date < startdate) {
        setInvalidDate(true);
      } else {
        setenddate(date ? new Date(date.toISOString()) : null);
 
        setInvalidDate(false);
      }
      
      };
   return ( <>
   <NavBar1/>
   <br/> <br/> <br/> <br/>
  
<script src="https://cdn.tailwindcss.com"></script>
<body class="bg-gray-100">
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Plan a new trip</h1>
    <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handlesubmit}>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="place">where to?</label>
        <Placesearchbar onSelect={handlePlaceSearch}/>
      </div>
      <div className="mx-auto p-4 w-64">
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        Select Dates:
      </label>
      <br/>
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        Start Date:
      </label>
      <DatePicker
        id="date"
        selected={startdate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText=" start date"
        className="w-full mt-1 py-2 px-3 rounded-md border border-gray-300 bg-white shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
      />
    </div>
    <div className="mx-auto p-4 w-64">
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
      End Date:
      </label>
      <DatePicker
        id="date"
        selected={enddate}
        onChange={handleDateChangee}
        dateFormat="yyyy-MM-dd"
        placeholderText="end date"
        className="w-full mt-1 py-2 px-3 rounded-md border border-gray-300 bg-white shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
      />
      {invalidDate && (
        <p style={{ color: 'red' }}>End date should be after the start date</p>
      )}
    </div>
    <div className="mx-auto p-4 w-64">
      <label className="block text-sm font-medium text-gray-700">Trip Type:</label>

      <div className="mt-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="Friends" 
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            className="form-radio text-indigo-600 h-5 w-5"
          />
          <span className="ml-2">Friend</span>
        </label>

        <label className="inline-flex items-center mt-2">
          <input
            type="radio"
            name="Family" 
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            className="form-radio text-indigo-600 h-5 w-5"
          />
          <span className="ml-2">Family</span>
        </label>
        &nbsp;&nbsp;
        <label className="inline-flex items-center mt-2">
          <input
            type="radio"
            name="Private" 
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
            className="form-radio text-indigo-600 h-5 w-5"
          />
          <span className="ml-2">Private</span>
        </label>
      </div>
    </div>
    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
      Add Tripmates
    </button>
    <br/>
      <button
        class="w-full bg-purple-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        type="submit">Start Planning</button>
    </form>
  </div>
</body>
   <br/> <br/> <br/> <br/>
    <Footer/>
    </>
   )
};


export default Tripform;