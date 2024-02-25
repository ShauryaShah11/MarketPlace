import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<Layout />} />     
       
                   
      
        </Routes>
        <Toaster />
    </BrowserRouter>
  );
}

export default App;
