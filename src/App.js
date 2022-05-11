import './App.css';
import Covers from './components/Covers';
import Experiences from './components/Experiences';
import NavBar from './components/NavBar';
import Slider from './components/Slide';
import "./index.css";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Covers/>
    <Experiences/>
    <Slider/>
    </div>
  );
}

export default App;