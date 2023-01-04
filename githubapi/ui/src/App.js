import logo from './logo.svg';
import './App.css';

import InputList from "./components/InputList";
import Employeelist from "./components/Employeelist";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <InputList />
            <Employeelist />
        </div>
    );
}

export default App;
