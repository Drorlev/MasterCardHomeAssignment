import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Qustionnaire from './Components/Qustionnaire'
import Score from './Components/Score'



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/qustionnaire' element={ <Qustionnaire/>}/>
          <Route path='/score' element={ <Score/>}/>
      </Routes>
    </div>
  );
}

export default App;
