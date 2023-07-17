import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Product from "./pages/Product/Product";
import Privacypolicy from "./pages/Privacy Policy/Privacypolicy";
import Termsandcondition from "./pages/Terms and Condition/Termsandcondition";
import Ourfeatures from "./pages/Features/Ourfeatures";
import Aboutus from "./pages/about/Aboutus";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termsandcondition" element={<Termsandcondition />} />
        <Route path="/ourfeatures" element={<Ourfeatures />} />
      </Routes>
    </div>
  );
};

export default App;
