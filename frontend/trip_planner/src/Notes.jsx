import React, { useState } from "react";

function Notes(){

  const [containers, setContainers] = useState([
    {
      id: 1,
      title: "",
      description: "",
    },
  ]);

    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const handleTitleChange =(id, value) => {
      const titlee=[...containers]
      titlee[id-1].title=value
     setContainers(titlee)
}

    const addContainer = () => {
      const newContainer = {
        id: containers.length + 1,
        title: "",
        description: "",
      };
  
      setContainers([...containers, newContainer]);
    };
  

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
          <div className="flex items-center justify-between m-5">
            <input
              type="text"
              className="font-bold text-2xl text-black bg-white border-none outline-none placeholder-black"
              placeholder="Notes"
            />
            <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4" onClick={addContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
    
          {containers.map((container) => (
            <div key={container.id} className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-grey-300 p-4 shadow-lg max-w-2xl">
              <input
                className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                spellCheck="false"
                placeholder="Title"
                type="text"
                value={container.title}
                onChange={(e) => handleTitleChange(container.id, e.target.value)}
              />
              <textarea
                className="description bg-gray-100 sec p-3 h-40 border border-gray-300 outline-none"
                spellCheck="false"
                placeholder="Write or paste anything here: how to get around, tips and tricks"
                value={container.description}
                onChange={(e) => handleDescriptionChange(container.id, e.target.value)}
              />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </label>
                  <input id="fileInput" hidden type="file" multiple />
                </label>
                <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
              </div>
              <div id="preview" className="my-4 flex">
                {/* Additional container content here */}
              </div>
              <div className="buttons flex justify-end">
                <div className="btn border border-purple-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-purple-500">Add</div>
              </div>
            </div>
          ))}
        </div>
      );
      
  
}

export default Notes;