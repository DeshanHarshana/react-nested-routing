import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Products from "./screen/subscreen/Product";
import Search from "./screen/subscreen/Products/Search";
import ListProducts from "./screen/subscreen/Products/ListProduct";
import AddProduct from "./screen/subscreen/Products/AddProduct";
import ProductDisplay from "./screen/subscreen/Products/ProductDisplay";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products"> Products </Link>
      </nav>
      <div style={{backgroundColor:'#f5eedc', height:'85vh'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id">
            <Route path="display" element={<ProductDisplay />}/>
          </Route>
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;