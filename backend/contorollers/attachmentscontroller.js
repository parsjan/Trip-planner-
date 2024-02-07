import tripmodel from "../models/tripmodel.js";
import multer from "multer"
const attachmentcontroller= async(req,res)=>{
    try{
     const index=req.body.index
     const tripid=req.body.tripid
     const username=req.body.username    
    const file=req.file;
    //console.log(file);
    const result1=await tripmodel.find({username:username,tripid:tripid})
    var originalname=new Array(4)
    for(i=0;i<=result1.attachments.len; i++){
        originalname[i]=result1.attachments[i].originalname
    }
    const updateQuery = {
        $set: {
            [`attachments.${index}`]: { submit: 1, filename: file.filename,originalname:file.originalname}
        }
    };
   
    const result = await tripmodel.updateOne({username:username,tripid:tripid},updateQuery)
        originalname[index]=file.originalname
    }
    catch(error){
        console.log(error);
        res.json("file not uploaded")
    } 
}

export default attachmentcontroller;
