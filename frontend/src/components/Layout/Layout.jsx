import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../../Pages/Login";
import ProductDetail from "../../Pages/ProductDetail";
import Register from "../../Pages/Register";
import Home from "../../Pages/Home";
import Footer from "../Footer/Footer";
import Customer from "../Admin/Customer";
import Category from "../Admin/Category";
import AddCategoryForm from "../Admin/AddCat";
import Logout from "../Admin/Logout";
import RenderSteps from "../AddProduct/RenderSteps";
function Layout() {
  return (
    <div>
     
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/post-product" element={<RenderSteps />}></Route>


          <Route path="/Admin/Customer" element={<Customer></Customer>}></Route>
          <Route
            path="/Admin/AddCat"
            element={<AddCategoryForm></AddCategoryForm>}
          ></Route>

          <Route path="/Admin/Category" element={<Category></Category>}></Route>
          <Route path="/Admin/logout" element={<Logout></Logout>}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
