import './App.css';
import Teams from './components/Teams';
import Counter from './components/Counter';
import BgChange from './components/BgChange';
import Home from './pages/home';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import DigitalClock from './components/DigitalClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/bgchange' element={<BgChange/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/digitalclock' element={<DigitalClock/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
