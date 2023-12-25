import './App.css';
import Navibar from "./components/Navibar";
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Navibar></Navibar>
      
      <About></About>

      <Skills></Skills>

      <Projects></Projects>

      <Contact></Contact>
    </div>
  );
}

export default App;
