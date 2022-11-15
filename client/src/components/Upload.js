import React from 'react';
import "../styles/upload.css"

export default  function Upload(props){
  const { handleChange, onClick} = props;
	return(
    <>
      <button onClick={onClick} className="file-upload">
        Upload
      </button>
      <input type="file" onChange={handleChange}/>
       
    </>
	)
}