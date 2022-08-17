import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";
import Index from "./component/dashBord/Index";
import GetCookie from "./component/hooks/GetCookie";
import ContactUs from '../src/component/contactUs/ContactUs'
import Category from "./component/category/Category";
import Product from "./component/product/Product";
import Home from "./component/home/Home";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/youshd/login" element={<Login />}></Route>

          <Route exact path="/youshd" element={<Login />}></Route>

          <Route path="/youshd/register" element={<Signup />}></Route>
          <Route path="/youshd/profile" element={<Index />}></Route>
          <Route path="/contact" element= {<ContactUs />}></Route>
          <Route path="/addCategory" element= {<Category />}></Route>
          <Route path="/addProduct" element= {<Product />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
