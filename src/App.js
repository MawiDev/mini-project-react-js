import './App.css';
import Counter from './components/Counter';
import BgChange from './components/BgChange';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import DigitalClock from './components/DigitalClock';
import GitHubUsers from './components/GitHubUsers';
import Viewport from './components/Viewport';
import TodoList from './components/TodoList'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/bgchange' element={<BgChange/>}/>
          <Route path='/digitalclock' element={<DigitalClock/>}/>
          <Route path='/githubusers' element={<GitHubUsers/>}/>
          <Route path='/viewport' element={<Viewport/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
        </Routes>
    </>
  );
}

export default App;
