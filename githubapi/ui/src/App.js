import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import InputList from "./components/InputList";
import Employeelist from "./components/Employeelist";

function App() {
    const [username, setUsername] = useState('Vansh-Coder');
    const [token, setToken] = useState('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');
    const [startdate, setStartdate] = useState('2021-12-28');
    const [enddate, setEnddate] = useState('2022-12-28');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <InputList u={username} su={setUsername} t={token} st={setToken} s={startdate} ss={setStartdate} e={enddate} se={setEnddate}/>
            <Employeelist u={username} t={token} s={startdate} e={enddate} />
        </div>
    );
}

export default App;
