import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import MobileNext from "./MobileNext";

function App() {
  return (
    <Routes>
      {/* Home page layout */}
      <Route path="/" element={<HomeLayout />} />

      {/* Separate page for Mobile */}
      <Route path="/mobnext" element={<MobileNext />} />
    </Routes>
  );
}

export default App;

          













   
