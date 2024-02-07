import tripmodel from "../models/tripmodel.js"
const searchbarcontroller=async(req,res)=>{
   console.log(req.body);
   const username=req.body.username
   const tripid=req.body.tripid
   const chabi=req.body.chabi
   const ind=req.body.expenseind
   const place=req.body.selectedPlaces
   const actplace=place[ind]
   var updateQuery = {
    $set: {
       ["itinerary." + chabi + ".placearr." + ind]: {
          "place": actplace,
          "description": "",
          "starttime": "",
          "endtime": "",
          "expense": "",
          "expensetype": "",
          "expensenote": ""
       }
    }
 };
   const result= await tripmodel.updateOne({username:username,tripid:tripid},updateQuery)
   console.log(result);
   res.json({result:result})
}
export default searchbarcontroller;