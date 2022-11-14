
import "./App.css";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import AllOutfits from "./components/AllOutfits";
import SingleOutfit from "./components/SingleOutfit";


function App() {


 const [outfits, setOutfits] = useState([]);  
  const[currentView, setCurrentView] = useState('AllOutfits');
  const[selectedOutfit, setSelectedOutfit] = useState('');

    function hanldeSingleOutfit(name) {
setSelectedOutfit(name)
setCurrentView('SingleOutfit');
}


  const outfitsList = outfits.map(outfit => {
    return <p onClick={(e) => {
      e.preventDefault();
      hanldeSingleOutfit(outfit.outfit_name);
      
      setCurrentView('SingleOutfit')
      }}> {outfit.outfit_name} {outfit.image_ref}</p>
  });



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
    <Navbar/>
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
