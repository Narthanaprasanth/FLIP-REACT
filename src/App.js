import React from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import ProductList from "./Components/ProductList";
import BannerCarousel from "./Components/BannerCarousel ";
import VioletDeals from "./Components/VioletDeals";
import Trends from "./Components/Trends";
function App(){
  return(
    <div>
      <Header/>
      <Category/>
      <BannerCarousel/> 
     <ProductList/>
     <VioletDeals dataSource={"/Violet.json"}/>
     {/* <Trends/>
     <VioletDeals dataSource={"/Violet2.json"}/>  */}
    </div>              
  )                            
}
export default App



