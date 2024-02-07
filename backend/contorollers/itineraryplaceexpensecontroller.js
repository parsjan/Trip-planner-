import tripmodel  from "../models/tripmodel.js"
const itineraryplaceexpensecontroller= async(req,res)=>{
    const {username,tripid,expense,description,expensetype,expenseind,chabi}=req.body
    const actualdes=description[expenseind]
    const actualexp=expense[expenseind]
    var updateQuery = {
        $set: {
           ["itinerary." + chabi + ".placearr." + expenseind]: {
              "expense": actualexp,
              "expensetype":expensetype,
              "expensenote":actualdes,
           }
        }
     };
     const result= await tripmodel.updateOne({username:username,tripid:tripid},updateQuery)
 res.json({result:result})
}
export default itineraryplaceexpensecontroller;