import tripmodel from "../models/tripmodel.js"
const itinerarycontroller =async(req,res)=>{
    try {
      //  console.log("itinerary controller working");
        const username=req.body.username;
        const tripid=req.body.tripid;
        const startDate=req.body.startDate
        const endDate=req.body.endDate
      //  console.log(username,tripid);
     //   console.log(startDate,endDate);
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
  const dateArray = [];
  let currentDate = new Date(startDate);
  let endDateObj = new Date(endDate);
  // console.log('Current Date:', currentDate);
  //console.log('End Date:', endDateObj);
  //console.log('Comparison Result:', currentDate <= endDateObj);
  
  while (currentDate <= endDateObj) {
      dateArray.push(formatDate(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
}
          const itinerary1= createDateArray(startDate,endDate)
        //  console.log(itinerary1);
       
        const result=await tripmodel.findOneAndUpdate({username:username,tripid:tripid},{
          $push: {
              itinerary: {
                  $each: itinerary1.map(date => ({ date: date, placearr: [] }))
              }
          }
      },{new:true}).catch(error => console.error(error)) 
        res.json({result:result});
       // console.log(result);
    } catch (error) {
        console.log(error);
    }
   
}

export default itinerarycontroller;