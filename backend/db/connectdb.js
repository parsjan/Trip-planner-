import mongoose from "mongoose"
const connectDB= async (DATABASE_URI)=>{
    try{
     const DB_OPTIONS={
        dbName:'Trip_planner'
     }
     await mongoose.connect(DATABASE_URI,DB_OPTIONS);
 console.log('connected successfully');
}
catch(error){
  console.log(error);
}
}

export default connectDB