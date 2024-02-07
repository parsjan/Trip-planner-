import express from "express"
import connect from "./db/connectdb.js";
import router from "./router/web.js"
import bodyParser from "body-parser"
import cors from "cors"
const app=express()
const port=process.env.PORT||3000;
const DATABASE_URI=process.env.DATABASE_URI||"mongodb://127.0.0.1:27017"

//CORS
app.use(cors());

//database connection
connect(DATABASE_URI);

//to take data using parser
app.use(bodyParser.json());

//load router
app.use("/",router)

app.listen(port,()=>{
    console.log("listening to the server")
})