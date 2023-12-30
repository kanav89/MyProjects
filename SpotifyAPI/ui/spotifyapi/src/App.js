import './App.css';
import React, { useState } from 'react';
import First from './Components/First';
import { Badge,Card,Dropdown, TextInput, Button, Navbar, NavbarBrand } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import p from './Spotify_App_Logo.svg.png';
import { HiExternalLink } from "react-icons/hi";

function App() {
  const [artist_na, setArtist_na] = useState('');
  const [artist_na2, setArtist_na2] = useState('');
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [data, setData] = useState([]);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isresult,setresult] = useState(false);

  const buttonHandler = async () => {
    setData([]);
    console.log('Loading...');
    const apiUrl = `/recommendations?artist_na=${artist_na}&artist_na2=${artist_na2}&genre=${genre}&mood=${mood}`;
    console.log('API URL:', apiUrl);
    try {
      const res = await fetch(apiUrl);
      console.log(res);
      setresult(true)
      if (!res.ok) {
        alert(`HTTP error! Status: ${res.status}`);
      }

      const jsonData = await res.json();
      console.log('Data:', jsonData);
      setData(jsonData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app">
      <Navbar class='nav'>
            <NavbarBrand href="https://flowbite-react.com">
              <img src={p} className="mr-3 ml-2 my-1 h-4 sm:h-7" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
                Playlist Generator
              </span>
            </NavbarBrand>
        </Navbar>
        
      {isFirstPage ? (
      <div>
        <body className='flex '>
          <First />
          <Button size="lg" onClick={() => setIsFirstPage(false)} >
            Let's Get Started<HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
        </body>
        <svg class='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#0099ff" fill-opacity="0.7" d="M0,64L7.7,69.3C15.5,75,31,85,46,96C61.9,107,77,117,93,122.7C108.4,128,124,128,139,138.7C154.8,149,170,171,186,192C201.3,213,217,235,232,256C247.7,277,263,299,279,288C294.2,277,310,235,325,229.3C340.6,224,356,256,372,272C387.1,288,403,288,418,261.3C433.5,235,449,181,465,154.7C480,128,495,128,511,160C526.5,192,542,256,557,282.7C572.9,309,588,299,604,250.7C619.4,203,635,117,650,74.7C665.8,32,681,32,697,53.3C712.3,75,728,117,743,122.7C758.7,128,774,96,790,69.3C805.2,43,821,21,836,37.3C851.6,53,867,107,883,122.7C898.1,139,914,117,929,138.7C944.5,160,960,224,975,234.7C991,245,1006,203,1022,202.7C1037.4,203,1053,245,1068,250.7C1083.9,256,1099,224,1115,186.7C1130.3,149,1146,107,1161,90.7C1176.8,75,1192,85,1208,112C1223.2,139,1239,181,1254,202.7C1269.7,224,1285,224,1301,208C1316.1,192,1332,160,1347,170.7C1362.6,181,1378,235,1394,261.3C1409,288,1425,288,1432,288L1440,288L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path></svg></div>  
        ) : (
      <div>
         
        <body className='flex'>
          
          <div className="flex max-w-md flex-col gap-4 py-20 mx-36">
            <h1 className='text-2xl font-serif text-white font-black'>Enter the names of your favourite artists, what genre you feel like listening to, and your current mood!</h1>
            <p className='text-lg font-serif text-white'>You will have a custom playslist of 20 songs.</p>
              <Card  className="max-w-md bg-white  border-green-500 border-2">
                  <form className="flex flex-col gap-4">
                    <TextInput color='info' type="text" onChange={(e) => setArtist_na(e.target.value)} placeholder="Enter artist name" />
                    <TextInput color='info' type="text" onChange={(e) => setArtist_na2(e.target.value)} placeholder="Enter artist name" />
                    <TextInput color='info' type="text" onChange={(e) => setGenre(e.target.value)} placeholder="Enter genre" />
                    <Dropdown label="How are you feeling?">
                      <Dropdown.Item onClick={() => setMood('Happy')}>Happy</Dropdown.Item>
                      <Dropdown.Item onClick={() => setMood('Sad')}>Sad</Dropdown.Item>
                      <Dropdown.Item onClick={() => setMood('Dance')}>Dance</Dropdown.Item>
                    </Dropdown>
                    <Button onClick={buttonHandler}>Generate</Button>
                </form>
              </Card>
            
            <h1 className='text-lg font-serif text-white'>You can generate a new playlist by clicking the button!</h1>
          </div>
          
         <div className='my-36'>
          {isresult &&(<Card className='overflow-y-scroll max-h-96 mb-7 border-black border-2'>
          {data.map((item, index) => (
              <div key={index} style={{fontFamily:'cursive'}}>
                {item[0]}
                <Badge className='max-w-7 ' size='sm'>
                  <a href={item[1]} target="_blank" rel="noopener noreferrer"><HiExternalLink/></a>
                </Badge> 
            {console.log(isresult)}
              </div>
            ))}
          </Card>
          )}
        </div>

          
        </body>
      </div>
        
      )}
      
    </div>
  );
}

export default App;
