
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
    // const fetchedOutfits = await axios.get('https://server-solomvp.onrender.com/api/outfits');
    setOutfits([{"id":289,"outfit_name":"knitdress","image_ref":"https://i.pinimg.com/564x/81/86/d1/8186d1d564986cf75791259108f2561d.jpg","tags":"fall outfits"},{"id":290,"outfit_name":"blazer","image_ref":"https://i.pinimg.com/236x/59/0d/1d/590d1d4a35debcf2458958b15d968208.jpg","tags":"casual,blazers"},{"id":291,"outfit_name":"denim","image_ref":"https://i.pinimg.com/564x/cc/32/df/cc32dfed30a6428a86a4ef568a4c3438.jpg","tags":"casual,blazers"},{"id":292,"outfit_name":"sweaters","image_ref":"https://i.pinimg.com/564x/0b/79/76/0b7976e1647e140e37f43abbad1ccbd3.jpg","tags":"fall knits"},{"id":293,"outfit_name":"red-dress","image_ref":"https://i.pinimg.com/564x/b4/7b/b5/b47bb5424ada46adc4b920515d138188.jpg","tags":"date dresses"},{"id":294,"outfit_name":"maxidress","image_ref":"https://i.pinimg.com/564x/b6/dd/fb/b6ddfb6e1eccc297b82872feddefd3d9.jpg","tags":"spring outfits"}]);
   
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
