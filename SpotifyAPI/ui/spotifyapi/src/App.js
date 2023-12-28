import './App.css';
import React, { useState } from 'react';
import First from './Components/First';
import { Card,Dropdown, TextInput, Button, Navbar, NavbarBrand } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import p from './Spotify_App_Logo.svg.png';

function App() {
  const [artist_na, setArtist_na] = useState('');
  const [artist_na2, setArtist_na2] = useState('');
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [data, setData] = useState([]);
  const [isFirstPage, setIsFirstPage] = useState(true);

  const buttonHandler = async () => {
    setData([]);
    console.log('Loading...');
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
  };

  return (
    <div className="app">
      <Navbar>
            <NavbarBrand href="https://flowbite-react.com">
              <img src={p} className="mr-3 ml-2 my-1 h-4 sm:h-7" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
                Playlist Generator
              </span>
            </NavbarBrand>
        </Navbar>
      {isFirstPage ? (
        <div>
          
          <First />
          <Button size="xl" onClick={() => setIsFirstPage(false)} pill>
            Start<HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      ) : (
        <div className='flex'>
          <div className="flex max-w-md flex-col gap-4 py-28 mx-36">
            <h1 className='text-lg '>Enter the names of your favourite artists, what genre you feel like listening to, and your current mood!</h1>
            <p className='text-sm'>You will have a custom playslist of 20 songs.</p>
              <Card className="max-w-md">
                  <form className="flex flex-col gap-4">
                    <TextInput type="text" onChange={(e) => setArtist_na(e.target.value)} placeholder="Enter artist name" />
                    <TextInput type="text" onChange={(e) => setArtist_na2(e.target.value)} placeholder="Enter artist name" />
                    <TextInput type="text" onChange={(e) => setGenre(e.target.value)} placeholder="Enter genre" />
                    <Dropdown label="How are you feeling?">
                      <Dropdown.Item onClick={() => setMood('Happy')}>Happy</Dropdown.Item>
                      <Dropdown.Item onClick={() => setMood('Sad')}>Sad</Dropdown.Item>
                      <Dropdown.Item onClick={() => setMood('Dance')}>Dance</Dropdown.Item>
                    </Dropdown>
                    <Button onClick={buttonHandler}>Generate</Button>
                </form>
              </Card>
            <h1>You can generate a new playlist by clicking the button!</h1>
          </div>
          <div className='flex max-w-md flex-col gap-2 py-28 mx-36'>
            {/* Display the data here */}
            {data.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
