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
import CreateProduct from "../../Pages/CreateProduct";
import ProductCategory from "../../Pages/ProductCategory";
import Chats from "../Chats/Chats";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header className="w-full" /> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/categories/:id" element={<ProductCategory />}></Route>

          <Route path="/post-product" element={<CreateProduct />}></Route>
          <Route path="/Admin/Customer" element={<Customer></Customer>}></Route>
          <Route
            path="/Admin/AddCat"
            element={<AddCategoryForm></AddCategoryForm>}
          ></Route>

          <Route path="/Admin/Category" element={<Category></Category>}></Route>
          <Route path="/Admin/logout" element={<Logout></Logout>}></Route>
          <Route path="/Chats" element={<Chats></Chats>}></Route>

         
        </Routes>
      </div>
      {/* <Footer className="w-full" /> */}
      
    </div>
  );
}

export default Layout;