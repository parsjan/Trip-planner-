import React, { useState } from "react";
function Datecontainer(){
    const [container,addcontainer]=useState()
    const handleTitleChange=(value)=>{
        addcontainer(value)
    }
    return (
        <>
        <div>
        
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-grey-300 p-4 shadow-lg max-w-2xl">
            DAY,DATE 
            <br/> <br/>
            <input
                className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                spellCheck="false"
                placeholder="Add a place"
                type="text"
                value={container}
                onChange={(e) => handleTitleChange( e.target.value)}
              />
        
        </div>
    </div>
        </>
    )
}

export default Datecontainer 