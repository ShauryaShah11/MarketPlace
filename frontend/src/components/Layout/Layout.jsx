import { Route, Routes } from "react-router-dom";
import Header from '../Header/Header'
import Login from "../../Pages/Login";
import ProductDetail from "../../Pages/Carousel";
import Register from "../../Pages/Register";
import Home from "../../Pages/Home";
import Footer from "../Footer/Footer"
function Layout(){
    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/Register' element={<Register />}></Route>
                    <Route path='/ProductDetails' element={<ProductDetail />}></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;