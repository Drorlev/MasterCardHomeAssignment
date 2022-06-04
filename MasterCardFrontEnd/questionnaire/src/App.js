import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Qustionnaire from './Components/Qustionnaire'



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/qustionnaire' element={ <Qustionnaire/>}/>
      </Routes>
    </div>
  );
}

export default App;
