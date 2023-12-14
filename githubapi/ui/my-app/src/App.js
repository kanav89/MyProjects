import React, { useState } from 'react';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [sd, setSd] = useState('');
  const [ed, setEd] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 

  const handleSubmit = async () => {
  console.log('Submitting...');
  setLoading(true);
  setError(null);

  const apiUrl = `/contributions?username=${name}&token=${token}&start_date=${sd}&end_date=${ed}`;
  console.log('API URL:', apiUrl);

  try {
    const res = await fetch(apiUrl);
    console.log('Response:', res);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
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


return (
  <>
    <input type="text" name="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
    <input type="text" name="token" placeholder="Enter token" value={token} onChange={(e) => setToken(e.target.value)} />
    <input type="text" name="sd" placeholder="Enter sd" value={sd} onChange={(e) => setSd(e.target.value)} />
    <input type="text" name="ed" placeholder="Enter ed" value={ed} onChange={(e) => setEd(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>

    {loading && <p>Loading...</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {data.length > 0 && (
      <div className='blue'>
        <h2>Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {}
      </div>
    )}
  </>
);

}

export default App;
