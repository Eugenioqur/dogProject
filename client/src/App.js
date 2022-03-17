import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LandinPage from './components/LandinPage';
import Home from './components/Home';
import Create from './components/Create';
import Dog from './components/Dog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandinPage/>}/>  
        <Route exact path='/home' element={<Home/>}/> 
        <Route exact path='/create' element={<Create/>}/> 
        <Route path='/dogs/:idRaza' element={<Dog/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
