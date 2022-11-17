import React from "react"

export default function AllOutfits({setCurrentView, outfitsList}) {
return (
    <div className="allPhotos-Grid" >
     {outfitsList}
     {outfitsList.map((outfit) => (
        <img className="grid-img" alt = 'outfit_image' src={outfit.src} />
      ))}
    {console.log(outfitsList)};
  
    </div>
  );
}
