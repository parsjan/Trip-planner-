import usermodel from "../models/usermodel.js";
import tripmodel from "../models/tripmodel.js";
import axios from "axios"
const logincontroller = async(req,res)=>{
    try {
        const API_KEY="AIzaSyBIBtQ9KaoiOqo5UzKL6TlhtWl2e7k_FsE";
        const MAX_WIDTH=720
        const MAX_HEIGHT=400
        const {username,password}= req.body
        if (!username || !password) {
          res.json({ key: 0,er:0});
          return;
        }
        // console.log(password);
        // console.log(username);
        const result = await usermodel.find({
            username: username,
            password: password
          });
      
        var result1= await tripmodel.find({
          username:username
        }
        );
       // console.log(result1)
          if (result===0){
            res.json({key:0,er:1})
          }
          
          else{
            let photourl=[]
           let photoReferencearr= []
          await Promise.all(result1.map(async (trip,i)=>{
                  try {
                    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(trip.place)}&key=${API_KEY}`);

                    if (response.data.results && response.data.results.length > 0) {
                      const firstPlace = response.data.results[0];
                      if (firstPlace.photos && firstPlace.photos.length > 0) {
                        const photoReference = firstPlace.photos[0].photo_reference;
                        photoReferencearr[i] = photoReference;
                      }
                    } 
                    if(photoReferencearr[i]===null){
                           photourl[i]=null;
                    }
                    else{
                      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${MAX_WIDTH}&photo_reference=${photoReferencearr[i]}&key=${API_KEY}`, { responseType: 'arraybuffer' });
                      const base64Image =await Buffer.from(response.data, 'binary').toString('base64');
                      const imageDataURL =await `data:image/jpeg;base64,${base64Image}`;
                      photourl[i]=imageDataURL
                    }
                  } catch (error) {
                    console.log(error);
                  }
          }))
         // console.log(photoReferencearr);
         // console.log(photourl);
            res.json({key:1,result1,username:username,photourl:photourl})
          }
    } catch (error) {
        console.log(error);
    }

}

export default logincontroller;