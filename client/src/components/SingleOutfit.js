import React from "react";


export default function SingleOutfit(outfit) {
  console.log(outfit);
return (
    <div className="allOutfits-Grid" >
   <img  alt = 'outfit_image' src = {outfit.selectedOutfit} ></img>
    
    </div>
  );
}
