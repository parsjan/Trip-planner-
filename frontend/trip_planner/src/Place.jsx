import React, { useState } from "react";
import Placesearchbar from "./Placesearchbar"

function Place(){

  const [containers, setContainers] = useState([
    {
      id: 1,
      title: ""
    },
  ]);

    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
  


    const addContainer = () => {
      const newContainer = {
        id: containers.length + 1,
        title: ""
      };
  
      setContainers([...containers, newContainer]);
    };
  
       const handleTitleChange =(id, value) => {
              const titlee=[...containers]
              titlee[id-1].title=value
             setContainers(titlee)
       }
    const handleFileChange = (event) => {
        const newImages = Array.from(event.target.files).map((file) => ({
          url: URL.createObjectURL(file),
          name: file.name,
          preview: ["jpg", "jpeg", "png", "gif"].includes(
            file.name.split(".").pop().toLowerCase()
          ),
          size:
            file.size > 1024
              ? file.size > 1048576
                ? Math.round(file.size / 1048576) + "mb"
                : Math.round(file.size / 1024) + "kb"
              : file.size + "b",
        }));
        setImages(newImages);
      };
      const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
      };
    
      return (
        <div className="bg-white shadow p-4 py-8 border border-purple-300 rounded-lg" x-data="{ images: [] }">
          {containers.map((container) => (
            <div key={container.id} className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-grey-300 p-4 shadow-lg max-w-2xl">
              <input
              type="text"
              className="font-bold text-2xl text-black bg-white border-none outline-none placeholder-black"
              placeholder="Places to visit"
            />
            <br/> <br/>
          <Placesearchbar/>
              <div className="icons flex text-gray-500 m-2">
              <label id="select-image">
            <label
              htmlFor="fileInput"
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </label>
            <input
              id="fileInput"
              hidden
              type="file"
              multiple
              onChange={handleFileChange}
            />
          </label>
              </div>
              <div id="preview" className="my-4 flex">
          {images.map((image, index) => (
            <div key={index} className="relative w-32 h-32 object-cover rounded">
              {image.preview ? (
                <img src={image.url} className="w-32 h-32 object-cover rounded" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current w-32 h-32 ml-auto pt-1"
                >
                  <path
                    d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z"
                  />
                </svg>
              )}
              <button
                onClick={() => removeImage(index)}
                className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"
              >
                <span className="mx-auto">×</span>
              </button>
              <div className="text-xs text-center p-2">{image.size}</div>
            </div>
          ))}
        </div>
              <div className="buttons flex justify-end">
                <div className="btn border border-purple-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-purple-500">Add</div>
              </div>
            </div>
          ))}
          <br/><br/>
          <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3" onClick={addContainer}>
             
              New list
            </button>
        </div>
        
      );
  
}

export default Place;