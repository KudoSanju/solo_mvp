
import "../App.css";
import {useState, useEffect, useRef} from 'react';
import axios from 'axios'; 
import Navbar from './Navbar';
import AllOutfits from "./AllOutfits";
import SingleOutfit from "./SingleOutfit";



function App() {

 const [outfits, setOutfits] = useState([]);  
  const[currentView, setCurrentView] = useState('AllOutfits');
  const[selectedOutfit, setSelectedOutfit] = useState('');
  const [file, setFile] = useState() 


   const outfitsList = outfits.map(outfit => {

    return <img alt = 'outfit_image'
     src = {outfit.image_ref}
    onClick={(e) => {
      e.preventDefault();
      hanldeSingleOutfit(outfit.image_ref);
      setCurrentView('SingleOutfit')

      }}></img>
  });



    function hanldeSingleOutfit(src) {
    setSelectedOutfit(src)
    setCurrentView('SingleOutfit');
    }
    
    //handlingUpload

    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      const url = 'http://localhost:3000/uploadFile';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
  
    }
  

  




  useEffect(() => {
    getOutfits();
    //fetch outfits from sever
  }, []);


  async function getOutfits() {
    const fetchedOutfits = await axios.get('/api/outfits');
    setOutfits(fetchedOutfits.data);
  }
  return (
  <div className="App">
    <div>
    <Navbar onClick={handleSubmit}/>
       
       {/* <form onSubmit={handleSubmit}>
       <h1>PickMyFit</h1>
       <input type="file" onChange={handleChange}/>
       <button type="submit">Upload</button>
     </form> */}
       
     </div>
    <h1>Outfits</h1>
    
    {currentView === "AllOutfits" ? (
     
        <AllOutfits
        hanldeSingleOutfit = {hanldeSingleOutfit}
        outfitsList = {outfitsList}
          setCurrentView={setCurrentView} // passing it as a prop
        />
      ) : (
        <SingleOutfit   
        selectedOutfit={selectedOutfit} 
        />
      )}
    
  </div>
  );
}

export default App;
