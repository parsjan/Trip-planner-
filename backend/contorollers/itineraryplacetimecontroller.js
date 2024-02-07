import tripmodel from  "../models/tripmodel.js"
const itineraryplacetimecontroller =async(req,res)=>{
     const {username,tripid,starttime,endtime,chabi,expenseind,}=req.body
     var updateQuery = {
        $set: {
           ["itinerary." + chabi + ".placearr." + expenseind]: {
              "starttime": starttime,
              "endtime":endtime
           }
        }
     };
     const result= await tripmodel.updateOne({username:username,tripid:tripid},updateQuery)
 res.json({result:result})
}

export default itineraryplacetimecontroller