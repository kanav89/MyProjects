import React, { useState } from 'react';
import { Button, TextInput, Progress } from 'flowbite-react';
import { GoogleLogin } from '@react-oauth/google';
// import {LineChart} from '@mui/x-charts';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




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
  const [authorized,setAuthorized] = useState(false)
  // const [newList, setListofDates] = useState([]);
  // const [d,setd] = useState();


  const handleInputChange = () => {
    setProgress((prevProgress) => prevProgress + 25);
  };

//   const makeList = (startDate, endDate) => {
//   const dlist = [];
//   const d = new Date(startDate);
//   const l = new Date(endDate);

//   while (d <= l) {
//     dlist.push(d.toISOString().slice(0, 10));
//     d.setDate(d.getDate() + 1);
//   }

//   return dlist;
// }
  const formatDate = (date) => {
    return date ? date.toString().split('T')[0] : '';
  };

  const handleSubmit = async () => {
    // const list_of_dates = makeList(sd,ed);
    // const newList = list_of_dates.map(date => date);
    // console.log(newList);
    console.log('Submitting...');
    console.log(sd);
    console.log(new Date(ed));
    const formattedDate2 = formatDate(ed);
    console.log(formattedDate2.toString());

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
      // setListofDates(newList);
      
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
      <strong style={{ fontSize: "x-large" ,textAlign:"center"}}>Welcome to Github Contribution Tracker</strong>
      
        {authorized?(
          <div>
          <h1 style={{ fontSize: 'x-large' }}>Enter Information!</h1>

                      <form className="flex max-w-md flex-col gap-4">
                        <TextInput className="i1" type="text" name="name" placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value); handleInputChange(); }} />
                        <TextInput className="i2" type="text" name="token" placeholder="Enter token" value={token} onChange={(e) => { setToken(e.target.value); handleInputChange(); }} />
                        <TextInput className="i3" type="text" name="sd" placeholder="Enter start date(yyyy-mm-dd)" value={sd} onChange={(e) => { setSd(e.target.value); handleInputChange(); }} />
                        {/* <TextInput className="i4" type="text" name="ed" placeholder="Enter end date(yyyy-mm-dd)" value={ed} onChange={(e) => { setEd(e.target.value); handleInputChange(); }} /> */}
                        <DatePicker
                          selected={ed ? new Date(ed) : null}
                          onChange={(date) => {setEd(formatDate(date));console.log(formatDate(date));}}
                          placeholderText="Select end date"
                          dateFormat="yyyy-MM-dd"
                        />
                        <Button gradientMonochrome="info" onClick={handleSubmit}>Submit</Button>
                        <Progress progress={progress} />
                        {loading && <p>Loading...</p>}
                        {error && <p style={{ color: 'red', fontSize: 'x-large', fontFamily: 'sans-serif' }}>{error}</p>}
                        {data.length > 0 && (
                          <div className="ouput">
                            <h2>Data:</h2>
                            <h2>{JSON.stringify(data, null, 2)}</h2>
        
                            {/* <LineChart
                              xAxis={[{ data: [1,2,3,4,5] }]}
                              series={[
                                {
                                  data: data,
                                },
                              ]}
                              width={500}
                              height={300}
                            /> */}
                          </div>
                        )}
                      </form>
            </div>
        ):(
        <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              setAuthorized(true);
                
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        )}
        
      </div>
    </>
  );
}

export default App;
