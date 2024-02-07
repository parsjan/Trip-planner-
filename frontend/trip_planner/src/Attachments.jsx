import { useState } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

function Attachments(props) {
  const tripid=props.tripid
  const username=props.username
  const attachments=props.attachments
  //console.log(tripid);
  //console.log(username);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [selectedfile,setselectedfile]=useState([attachments[0].originalname,attachments[1].originalname,attachments[2].originalname,attachments[3].originalname])
 const uploadfile=async (file,index)=>{
       const formData = new FormData();
       formData.append('file', file);
       formData.append('tripid',tripid);
       formData.append('username',username);
       formData.append('index',index);
       try {
        const response = await axios.post('http://localhost:3000/tripdashboard/upload', formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded:', response.data);
        const newfilestack=[...selectedfile]
        newfilestack[index]=response.data.originalname;
        setselectedfile(newfilestack)
      } catch (error) {
        console.error('Error uploading file:', error);
      }
 }
  const handleFileInputChange = (index) => (e) => {
    e.preventDefault();
    // Trigger file input click event
    document.getElementById(`fileInput-${index}`).click();
  };

  const handleFileSelected =(index) => (e) => {
    const file = e.target.files[0];
    console.log(index);
  if (file){
    uploadfile(file,index);
  }
    setFileInputKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <div class="p-2 w-full">
        <div class="border-2 border-purple-200 p-6 rounded-lg">
          <div class="flex items-center space-x-6">
            <h1 className="heading font-bold text-2xl m-5 text-gray-800 bg-white">
              Attachments
            </h1>
            {[faPlane, faBed, faCar, faPaperclip].map((icon, index) => (
              <div key={index}>
                <button
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  onClick={handleFileInputChange(index)}
                >
                  <FontAwesomeIcon icon={icon} size="2x" />
                </button>
              <div class="text-purple-500">  {selectedfile[index]}   </div>
                <input
                  type="file"
                  id={`fileInput-${index}`}
                  key={`fileInput-${fileInputKey}`}
                  style={{ display: 'none' }}
                  onChange={handleFileSelected(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Attachments;
