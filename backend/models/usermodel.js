import mongoose from "mongoose"

//defining schema 
const userSchema=new mongoose.Schema({
    username:{type:String},
     password:{type:String}
})

//model
const usermodel=mongoose.model("user",userSchema);

export default usermodel