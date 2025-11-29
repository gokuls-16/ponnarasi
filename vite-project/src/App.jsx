import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminDashboard from "../Admin/AdminDashboard";
import ProductLists from "../Admin/ProductLists";
import AddProduct from "../Admin/AddProduct";
import EditProduct from "../Admin/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/admin/products" element={<ProductLists/>} />
        <Route path="/admin/add" element={<AddProduct/>} />
        <Route path="/admin/edit/:id" element={<EditProduct/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;