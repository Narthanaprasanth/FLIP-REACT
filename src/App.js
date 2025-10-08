// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import MobileNext from "./MobileNext";
import Filter from "./Components2/Filter";
import Product2 from "./Components2/Product2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/mobnext" element={<MobileNext />} />
      <Route path="/filternxt" element={<Filter />} />
      <Route path="/products" element={<Product2 />} />
    </Routes>
  );
}

export default App;
