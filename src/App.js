import React from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import ProductList from "./Components/ProductList";
import BannerCarousel from "./Components/BannerCarousel ";
function App(){
  return(
    <div>
      <Header/>
      <Category/>
     <BannerCarousel/>
     <ProductList/>
    </div>              
  )
}
export default App
              


