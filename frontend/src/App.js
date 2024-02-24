import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Home from './Pages/Home/Home';


function App() {
  return (
    <>
      <Router>

        <Routes>
       
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        
      
           
        </Routes>
      </Router>
    </>
  );
}

export default App;
