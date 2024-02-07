import tripmodel from "../models/tripmodel.js";

const tripformcontroller= async (req,res)=>{
  try{  function generateRandom10DigitNumber() {
        const min = 1000000000; // Minimum 10-digit number (10^9)
        const max = 9999999999; // Maximum 10-digit number (10^10 - 1)
      
        // Generate a random number within the specified range
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
        return randomNumber;
      }
      
      const tripid = generateRandom10DigitNumber();
      const triptype=req.body.tripType
      var key ;
      if(triptype=="option1"){
        key=0;
      }
      else if (triptype=="option2"){
        key=1
      }
      else if(triptype=="option3"){
        key=2
      }
   //   console.log(req.body)

    const doc=new tripmodel({
    username:req.body.username,
    tripid:tripid,
     place:req.body.place,
     startdate:req.body.startDate,
     enddate:req.body.endDate,
     triptype:key,
     lan:req.body.lan,
     lat:req.body.lat,
    })
    const saveddoc=await doc.save();
   // console.log(saveddoc)
    res.json({saveddoc});
  }
  catch(error){
    console.log(error)
  }
}

export default tripformcontroller