  import axios from "axios"
      const photourlgenerator= async(req,res)=>{
        const API_KEY="AIzaSyBIBtQ9KaoiOqo5UzKL6TlhtWl2e7k_FsE";
        const MAX_WIDTH=720
        const MAX_HEIGHT=400
        const result1=req.body.result1
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
res.json({photourl})
        }

        export default photourlgenerator;