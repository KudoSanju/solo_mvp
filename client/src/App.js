
import "./App.css";
import {useState, useEffect, useRef} from 'react';
import axios from 'axios'; 
import FileUpload from './components/FileUpload'
import AllOutfits from "./components/AllOutfits";
import SingleOutfit from "./components/SingleOutfit";

function App() {

  const [outfits, setOutfits] = useState([]);  
 
  const[currentView, setCurrentView] = useState('AllOutfits');
  const[selectedOutfit, setSelectedOutfit] = useState('');
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

async function getOutfits() {
    const fetchedOutfits = await axios.get('/api/outfits');
    setOutfits(fetchedOutfits.data);  
  }

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

 
  useEffect(() => {
    getOutfits();
    //fetch outfits from sever
  }, []);



  return (
  <div className="App">
   
  
 <FileUpload />
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
