import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [sd, setSd] = useState('');
  const [ed, setEd] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setError(null);

    const apiUrl = `/contributions?username=${name}&token=${token}&start_date=${sd}&end_date=${ed}`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
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
      <div>
        <h2>Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {}
      </div>
    )}
  </>
);

}

export default App;
