import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import MobileNext from "./MobileNext";
import Filter from "./Components2/Filter";

function App() {
  return (
    <Routes>
      {/* Home page layout */}
      <Route path="/" element={<HomeLayout />} />

      {/* Separate page for Mobile */}
      <Route path="/mobnext" element={<MobileNext />} />

      <Route path="/filternxt" element={<Filter/>}/>
    </Routes>
  );
}

export default App;

          





 







   
