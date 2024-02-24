import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Home from './Pages/Home/Home';
import Register from './Register'
import ProductDetail from './Pages/ProductDetails/ProductDetail';

function App() {
  return (
    <>
      <Router>

        <Routes>
       
        <Route path='/' element={<Home/>}></Route>

        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/ProductDetails' element={<ProductDetail/>}></Route>
        
        
      
           
        </Routes>
      </Router>
    </>
  );
}

export default App;
