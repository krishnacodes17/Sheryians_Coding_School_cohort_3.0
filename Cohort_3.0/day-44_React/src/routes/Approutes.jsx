import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import ProductDetails from "../components/ProductDetails";
import ProtectedRoutes from "./ProtectedRoutes";

function Approutes() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about" element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>}/>
            
        <Route path="/products" element={<Product />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default Approutes;
