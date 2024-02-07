import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";
  import { useState,useEffect, } from "react";
  import Expense from "./Expensepopup";
  import Expensetype from "./Expensetype"
  import  "./modal.css"
  import Time from "./Time";
  import axios from "axios"
  const Searchbar = (props) => {
    const date=props.date
    const chabi=props.chabi
    const username=props.username
    const tripid=props.tripid
    const {setchabi}=props
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [openexpense,setopenexpense]=useState(false)
    const [expense,setexpense]=useState([])
    let expenseind=-1
    const [openexpensetype,setopenexpensetype]=useState(false)
    const [expensetype,setexpensetype]=useState("Activities")
    const [opentime,setopentime]=useState([])
    const [description,setdescription]=useState([])
    const [time,settime]=useState([])
    const [note,setnote]=useState([])
    var starttime1 ;
    var endtime1 ;
    useEffect(()=>{
      console.log("useeffect working");
      if(expenseind != -1){
        console.log("inside if");
      const response= axios.post("http://localhost:3000/searchbar",{chabi:chabi,ind:expenseind,username:username,tripid:tripid,place:selectedPlaces})
      console.log(response.data.result);
      }
    },[selectedPlaces])
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete();
    const ref = useOnclickOutside(() => {
      // When the user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
   const handleontypeselect =(gotexpense)=>{
    const response= axios.post("http://localhost:3000/itineraryplaceexpense",{username:username,tripid:tripid,expense:expense,description:description,expensetype:expensetype,expenseind:expenseind,chabi:chabi})
    console.log(response.data.result);
    const expensearr=[...expense]
    expensearr[expenseind]=gotexpense
    setexpense(expensearr)
    setopenexpense(false)
    setopenexpensetype(true)
  }
  const handledescription=(descript)=>{
        const descriptarr=[...description]
        descriptarr[expenseind]=descript
        setdescription(descriptarr)
  }
  const ontimeclick=(index)=>{
  //  console.log(selectedPlaces);
  //  console.log("ontimeclick working",index,opentime);
    setchabi()
    expenseind=index
    setopentime((prevOpentime) => {
      const newOpentime = [...prevOpentime];
      newOpentime[index] = (newOpentime[index] === 0 || newOpentime[index] === undefined) ? 1 : 0;
      return newOpentime;
    });
  }
    const handlesettime=(starttime,endtime)=>{
      const response=axios.post("http://localhost:3000/itineraryplacetime",{username:username,tripid:tripid,starttime:starttime,endtime:endtime,chabi:chabi,expenseind:expenseind})
      console.log(response.data.result);
         const finaltime=starttime+"-"+endtime
         starttime1=starttime
         endtime1=endtime
         const timearr=[...time]
         timearr[expenseind]=finaltime
           settime(timearr)
           const timearry=[...opentime]
           timearry[expenseind]=0
           setopentime(timearry)
    }
   const handeltypecloseonselect = ()=>{
    setopenexpensetype(false)
    setopenexpense(true)
  }
   const handleExpenseTypeSelect = (type) => {
    setexpensetype(type);
  };
  const handlecloseall=()=>{
    setopenexpense(false)
    setopenexpensetype(false)
  }
    const handleInput = (e) => {
      // Update the keyword of the input element
      setValue(e.target.value);
      
    };
   const handlenotes = (e)=>(index)=>{
    setchabi()
    expenseind=index
    const notearr=[...note];
     notearr[expenseind]=e.target.value
    setnote(notearr);
    const response=axios.post("http://localhost:3000/itineraryplacenotes",{username:username,tripid:tripid,note:note,chabi:chabi,expenseind:expenseind})                      
     console.log(response.data.result);
  }
    const handleSelect =
      ({ description }) =>
      () => {
        // When the user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setchabi();
        setValue("");
        clearSuggestions();
  
        // Get latitude and longitude via utility functions
        getGeocode({ address: description }).then((results) => {
          const { lat, lng } = getLatLng(results[0]);
         // console.log("📍 Coordinates: ", { lat, lng });
         // console.log(description)
         const placearr=[...selectedPlaces]
         placearr[selectedPlaces.length]=description
         setSelectedPlaces(placearr);
        // console.log(selectedPlaces.length);
         expenseind=placearr.length - 1
         console.log(expenseind);
         console.log(selectedPlaces);
        // console.log(selectedPlaces);
        });
      };
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
  
        return (
          <li key={place_id} onClick={handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
  
    return (
      <>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-grey-300 p-4 shadow-lg max-w-2xl mt-4 mb-4">
        <span className="text-lg font-bold italic mb-2">{date}</span>
        <br/> <br/>
        {selectedPlaces.length > 0 && (
          <div className="w-full mb-4">
              {selectedPlaces.map((place, index) => (
                
                <div class="bg-gray-200 rounded-md mb-3 p-4" key={index}>
                  <div class="flex justify-between items-start">
                    <div class="flex">
                <div class="rounded-full bg-purple-500 h-8 w-8 flex items-center justify-center text-white mr-4">
              <span class="text-lg font-semibold">{index+1}</span>
                </div>
                <h2 class="text-xl font-semibold text-gray-800">{place}</h2>
                </div>
                <div >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                 </svg>
                 </div>
                </div>
                <br/>
                <textarea class="bg-gray-200 p-2 rounded-md focus:outline-none focus:border-gray-200 resize-none w-96 h-auto overflow-visible " placeholder="Add notes,links,etc here"  value={note[expenseind]} type="text" onChange={handlenotes(index)} ></textarea>
                <br/>
                <div class="flex">
                <div class="ml-2">
                <div className="flex items-center">
                <button onClick={()=>{ontimeclick(index)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </button>
                <span className="ml-2">{time[index]}</span>
                </div>
                {opentime[index]===1 ? (
                  <Time chabi={chabi} username={username} tripid={tripid} expenseind={expenseind} starttimee={starttime1} endtimee={endtime1} settimeinsearch={handlesettime}/>
                  
                ):
                (<div></div>)}
                </div>
                &nbsp; &nbsp; &nbsp;
                <div class="flex items-center">
                <button onClick={()=>{setopenexpense(true); expenseind=index;setchabi()}} >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
                </button>
                {expense[index] ?(<div>₹{expense[index]}</div>)
                :(
                  <div></div>
                )
  } 
               </div>
                </div>
              </div>
              ))}
          </div>
        )}
        <div className="flex justify-between" >
      <div ref={ref}>
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </div>
      </div>
      {openexpense && (
        <div className="backdrop">
        <div className="modal">
        <Expense chabi={chabi} username={username} tripid={tripid} expenseind={expenseind} expense={expense[expenseind]} expensetype={expensetype} ontypeselect={handleontypeselect} ondescription={handledescription} description={description[expenseind]} closeall={handlecloseall}/>
       </div>
       </div>
        )}
      {openexpensetype && (
        <div className="backdrop">
        <div className="modal">
        <Expensetype chabi={chabi} username={username} tripid={tripid} expenseind={expenseind} onExpenseTypeSelect={handleExpenseTypeSelect} onselect={handeltypecloseonselect}/>
      </div>
      </div>
      )}

</>
    );
  };
export default Searchbar