import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './Login';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <>
      <Router>

        <Routes>
       
        <Route path='/' element={<Login/>}></Route>
        <Route path='/ProductDetail' element={<ProductDetail/>}></Route>
           
        </Routes>
      </Router>
    </>
  );
}

export default App;
