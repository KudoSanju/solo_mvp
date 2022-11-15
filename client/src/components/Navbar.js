import React from "react";
import Upload from "./Upload";
import "../styles/navbar.css"


export default function Navbar(props) {
  const {onClick} = props;
  return (
    <>
      <div className="navbar">
      <a href="">Home</a>
        <Upload onClick={onClick} />
      </div>
    </>
  );
}
