import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Triplist(props){
  const result = props.result1;
  const username=props.username;
  const photourl=props.photourl
  console.log(result);
  console.log(photourl);
  console.log(username);
   const navigate = useNavigate();
   function edittripdashboard(tripobj){
      navigate("/tripdashboard",{state:{saveddoc:tripobj}});
   }
    const handledelete=async (tripid,username)=>{
      console.log("delete request");
   const response =await axios.post("http://localhost:3000/tripdelete",{tripid:tripid,username:username})
   console.log(response.data.result1[0].username);
   console.log("delete done and get new result 1",response);
   const response1 =await axios.post("http://localhost:3000/photourl",{result1:response.data.result1})
       navigate("/loginedhome",{state:{result1:response.data.result1,username:response.data.result1[0].username,photourl:response1.data.photourl}});
  console.log("new result1 navigated");
      }
   const goToTripForm = () => {
    navigate('/tripform', { state: {username:username}});
  };
  const chunkArray = (array, chunkSize) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArr.push(array.slice(i, i + chunkSize));
    }
    return chunkedArr;
  };
  const chunkedResult = chunkArray(result, 3);
    return(<>
    <div>
    <br/>
    <br/>
   <div class="container mx-auto p-5">
  <div class="font-bold text-3xl mb-6">Your Trips</div>
  {result.length===0 ? (
  <div>No trips available.
    <br/>
    <br/>
    <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={goToTripForm }>Start planning</button>
  </div>
  
  ) : (
       
    <section class="text-gray-600 body-font">
    <div class="flex flex-wrap -m-4" >
    {chunkedResult.map((chunk, idx) => (
      <div class="w-full md:w-1/3 p-4" key={idx}>
     <div className="flex flex-wrap -m-4" >
      {chunk.map((tripobj, index) => (
         <div class="w-full p-4" key={index}>
        <div class="bg-gray-100 p-6 rounded-lg">
        <div class="flex mb-4 space-x-2">
          <button onClick={()=>edittripdashboard(tripobj)} class="hover: bg-grey-10000">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        </button>
        <button  onClick={()=>handledelete(tripobj.tripid,tripobj.username)} class="hover: bg-grey-1000">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
         </svg>
         </button>
         <button class="hover: bg-grey-1000">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>
         </div>
         {photourl[idx * 3 + index] && photourl[idx * 3 + index] !== null ? (
      <img
        class="h-32 rounded w-full object-cover object-center mb-4"
        src={photourl[idx*3+index]} // Use the photourl for the image source
        alt="content"
      />
    ) : (
      // If photourl is null or doesn't exist, show a placeholder image
      <img
        class="h-32 rounded w-full object-cover object-center mb-4"
        src="https://dummyimage.com/720x400"
        alt="content"
      />
    )}
          <h3 class="tracking-widest text-purple-500 text-xs font-medium title-font">Trip to</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{tripobj.place}</h2>
          <p class="leading-relaxed text-base">{tripobj.startdate} - {tripobj.enddate}</p>
          <p class="leading-relaxed text-base">{tripobj.description}</p>
           </div>
           </div>
           ))} 
        </div>
      </div>
        ))}
    </div>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={goToTripForm }>Start planning</button>
  </div>
  </section>   
    )}
</div>
  </div>
 
    </>)
 }
 export default Triplist