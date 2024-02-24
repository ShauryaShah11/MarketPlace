import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './Login';
<<<<<<< HEAD
import ProductDetail from './pages/ProductDetail';
=======
import Home from './Pages/Home/Home';
>>>>>>> 0525bc2e4151a864e871a5422b90d5de7b031072


function App() {
  return (
    <>
      <Router>

        <Routes>
       
        <Route path='/' element={<Login/>}></Route>
<<<<<<< HEAD
        <Route path='/ProductDetail' element={<ProductDetail/>}></Route>
=======
        <Route path='/home' element={<Home/>}></Route>
        
      
>>>>>>> 0525bc2e4151a864e871a5422b90d5de7b031072
           
        </Routes>
      </Router>
    </>
  );
}

export default App;
