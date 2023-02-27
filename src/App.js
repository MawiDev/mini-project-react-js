import './App.css';
import Counter from './components/Counter';
import BgChange from './components/BgChange';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import DigitalClock from './components/DigitalClock';
import Meeting from './components/Meeting';
import Viewport from './components/Viewport';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/bgchange' element={<BgChange/>}/>
          <Route path='/digitalclock' element={<DigitalClock/>}/>
          <Route path='/meeting' element={<Meeting/>}/>
          <Route path='/viewport' element={<Viewport/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
