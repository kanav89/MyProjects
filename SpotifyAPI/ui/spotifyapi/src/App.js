import './App.css';
import React, { useState } from 'react';
import First from './Components/First';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight} from 'react-icons/hi';
function App() {

  const [artist_na, setArtist_na] = useState('');
  const [artist_na2, setArtist_na2] = useState('');
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [data, setData] = useState([]);
  const [isfisrtpage,setisfirstpage] = useState(true);

  const buttonHandler = async () => {
    setData([]);
    console.log("Loading...");
    const apiUrl = `/recommendations?artist_na=${artist_na}&artist_na2=${artist_na2}&genre=${genre}&mood=${mood}`;
    console.log('API URL:', apiUrl);
    try {
      const res = await fetch(apiUrl);
      console.log(res);

      if (!res.ok) {
        alert(`HTTP error! Status: ${res.status}`);
      }

      const jsonData = await res.json();
      console.log('Data:', jsonData);
      setData(jsonData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div class = "app">
      {isfisrtpage?(
      <div>
      <First></First>
      <Button size="xl" onClick={() => setisfirstpage(false)} pill>Start<HiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>
      
      </div>
      ):(
      <div>
      <input type="text" onChange={(e) => { setArtist_na(e.target.value) }} placeholder="Enter artist name" />
      <input type="text" onChange={(e) => { setArtist_na2(e.target.value) }} placeholder="Enter artist name" />
      <input type="text" onChange={(e) => { setGenre(e.target.value) }} placeholder="Enter genre" />
      <input type="text" onChange={(e) => { setMood(e.target.value) }} placeholder="Enter mood" />
      <button onClick={buttonHandler}>Click</button>

      {/* Display the data here */}
      {data.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      
      ))}
      </div>
    )}  
    </div>
  );
}

export default App;
