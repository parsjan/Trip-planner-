import tripmodel from "../models/tripmodel.js"
const itineraryplacenotescontroller = async(req,res)=>{
 const {username,tripid,note,chabi,expenseind}=req.body
 const actualnote=note[expenseind]
 console.log(req.body);
 var updateQuery = {
    $set: {
       ["itinerary." + chabi + ".placearr." + expenseind]: {
          "description": actualnote
       }
    }
 };
 const result= await tripmodel.updateOne({username:username,tripid:tripid},updateQuery)
 res.json({result:result})
}

export default itineraryplacenotescontroller;