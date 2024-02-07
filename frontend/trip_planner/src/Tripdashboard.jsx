import MapContainer from "./Map"
import Sidebar from "./Sidebar";
import Attachments from "./Attachments.jsx";
import Notes from "./notes";
import Place from "./Place";
import Tripoverview from "./Tripoverview";
import Logobar from "./Logobar";
import Itinerary from "./Itinerary";
import Budgeting from "./Budgeting.jsx";
import {useLocation}from "react-router-dom"
function Tripdashboard(){
  const location= useLocation()
  //console.log(location)
  const place=location.state.saveddoc.place;
  const startdate=location.state.saveddoc.startdate;
  const enddate=location.state.saveddoc.enddate;
  const description=location.state.saveddoc.description
  const username=location.state.saveddoc.username
  const tripid=location.state.saveddoc.tripid
  const attachments=location.state.saveddoc.attachments
  const lat=location.state.saveddoc.lat
  const lan=location.state.saveddoc.lan  
 /* console.log("Place:", place);
  console.log("Start Date:", startdate);
  console.log("End Date:", enddate);
  console.log("Description:", description);
  console.log("Username:", username);
  */
          return (
            <>
            <br/>
            <Logobar/>
            <br/><br/>  
  <div className="flex">
  <div className="flex-none w-1/5h-screen bg-gray-200" >
    <Sidebar/>
    </div>
  <div className="flex-grow h-screen w-2/5 overflow-x-auto" >
    <Tripoverview  description={description} startdate={startdate} enddate={enddate} place={place} username={username} tripid={tripid}/>
      <br/> <br/><br/>
   
    <Attachments username={username}  tripid={tripid}  attachments={attachments}/>
    <br/>
    <Notes username={username} tripid={tripid}/>
    <br/>
    <Place username={username} tripid={tripid}/>
    <br/>
   <Itinerary username={username} tripid={tripid} startdate={startdate} enddate={enddate}/>
   <br/>
   <Budgeting username={username} tripid={tripid}/>
  </div>
 


  {/* Right Half - Google Maps (Full Width) */}
  <div className="flex-none w-2/5 h-screen bg-gray-200" >
    <MapContainer lan={lan} lat={lat}/>

  </div>
</div>

       
       
            </>
          )
}

export default Tripdashboard;