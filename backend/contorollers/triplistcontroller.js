import tripmodel from "../models/tripmodel.js";
const triplistcontroller=async (req,res)=>{
    //console.log("trip delete request recieved");
    const tripid=req.body.tripid;
    const username=req.body.username
     await tripmodel.deleteOne({tripid:tripid})
    // console.log("done with trip model");
    const result1= await tripmodel.find({username:username});
  //  console.log("new trip data retrived",result1);
    res.json({result1})
   // console.log("new data send successfully");
}


export default triplistcontroller