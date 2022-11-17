import React from "react";
import "../styles/navbar.css";
import FileUpload from "./FileUpload";
import "../styles/FileUpload.css";



export default function Navbar({ outfitsList}) {
  return (
    <>
      <div className="navbar">
        <a href="">Return</a>
        <FileUpload /> 
       
        
    
       
      </div>
    </>
  );
}
