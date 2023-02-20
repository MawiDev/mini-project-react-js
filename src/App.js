import './App.css';
import Teams from './components/Teams';
import Counter from './components/Counter';
import Home from './pages/home';
import Navbar from './layout/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/counter' element={<Counter/>}/>
        </Routes>
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
