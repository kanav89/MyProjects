import React, { useState } from 'react';
import { Button, TextInput, Progress } from 'flowbite-react';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [sd, setSd] = useState('');
  const [ed, setEd] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleInputChange = () => {
    setProgress((prevProgress) => prevProgress + 25);
  };

  const handleSubmit = async () => {
    console.log('Submitting...');
    setLoading(true);
    setError(null);
    setData([]);
    setProgress(0);

    const apiUrl = `/contributions?username=${name}&token=${token}&start_date=${sd}&end_date=${ed}`;
    console.log('API URL:', apiUrl);

    try {
      const res = await fetch(apiUrl);
      console.log('Response:', res);

      if (!res.ok) {
        alert(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log('Data:', data);

      setData(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
      console.log('error');
    } finally {
      setLoading(false);
      console.log('Finished submitting');
    }
  };

  React.useEffect(() => {
    document.title = 'Github!';
  }, []);

  return (
    <>
      <div className='full-page-container'>
        <strong style={{ fontSize: "x-large" }}>Welcome to Github Contribution Tracker</strong>
        <h1 style={{ fontSize: 'x-large' }}>Enter Information!</h1>

        <form className="flex max-w-md flex-col gap-4">
          <TextInput className="i1" type="text" name="name" placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value); handleInputChange(); }} />
          <TextInput className="i2" type="text" name="token" placeholder="Enter token" value={token} onChange={(e) => { setToken(e.target.value); handleInputChange(); }} />
          <TextInput className="i3" type="text" name="sd" placeholder="Enter start date(yyyy-mm-dd)" value={sd} onChange={(e) => { setSd(e.target.value); handleInputChange(); }} />
          <TextInput className="i4" type="text" name="ed" placeholder="Enter end date(yyyy-mm-dd)" value={ed} onChange={(e) => { setEd(e.target.value); handleInputChange(); }} />
          <Button gradientMonochrome="info" onClick={handleSubmit}>Submit</Button>
          <Progress progress={progress} />
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red', fontSize: 'x-large', fontFamily: 'sans-serif' }}>{error}</p>}
          {data.length > 0 && (
            <div className="ouput">
              <h2>Data:</h2>
              <h2>{JSON.stringify(data, null, 2)}</h2>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
