import { Route, Routes } from "react-router-dom";
import Header from '../Header/Header'
import Login from "../../Pages/Login";
import ProductDetail from "../../Pages/ProductDetail";
import Register from "../../Pages/Register";
import Home from "../../Pages/Home";
import Footer from "../Footer/Footer"
import Customer from "../Admin/Customer";
// import Product from "../Admin/Product";
import Category from "../Admin/Category";
// import Dashboard from "../Admin/Dashboard";
import AddCategoryForm from "../Admin/AddCat";
import Logout from "../Admin/Logout";
function Layout(){
    return (
        <div>
            
            <div className="container mx-auto">
                <Routes>
                   
                    <Route path="/" element={<Home />} />
                 
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/Register' element={<Register />}></Route>
                    <Route path='/ProductDetails' element={<ProductDetail />}></Route>
                       
           
            <Route path="/Admin/Customer" element = {<Customer></Customer>}></Route>
            <Route path="/Admin/AddCat" element = {<AddCategoryForm></AddCategoryForm>}></Route>
        
            <Route path="/Admin/Category" element = {<Category></Category>}></Route>
            <Route path="/Admin/logout" element = {<Logout></Logout>}></Route>
                </Routes>
            </div>
            
        </div>
    );
}

export default Layout;  