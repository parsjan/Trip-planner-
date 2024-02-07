import mongoose from "mongoose"

const tripschema=new mongoose.Schema({
    username:{type:String},
    tripid:{type:String},
     place:{type:String},
     startdate:{type:Date},
     enddate:{type:Date},
     triptype:{type:Number},
     description:{type:String,default:"This trip is all about exploring the Big Apple."},
     notes:{type:Array,default:[]},
     lat:{type:mongoose.Decimal128},
     lan:{type:mongoose.Decimal128},
     placeto:{type:Array,default:[]},
     itinerary:{type:Array,default:[]},
     Budgeting:{type:Object,default:{}},
     attachments:{type:Array,default:[{submit:0,filename:"",originalname:""},{submit:0,filename:"",originalname:""},{submit:0,filename:"",originalname:""},{submit:0,filename:"",originalname:""}]}
})

//model
const tripmodel=mongoose.model("trip",tripschema);

export default tripmodel