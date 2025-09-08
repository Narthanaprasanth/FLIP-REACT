import React from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import BannerCarousel  from "./Components/BannerCarousel ";
function App(){
  return(
    <div>
      <Header/>
      <Category/>
      <BannerCarousel />
    </div>
  )
}
export default App