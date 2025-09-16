import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import ProductList from "./Components/ProductList";
import BannerCarousel from "./Components/BannerCarousel ";
import VioletDeals from "./Components/VioletDeals";
import Trends from "./Components/Trends";
import Discounts from "./Components/Discounts";
import Discimg from "./Components/Discimg";
import Flightimg from "./Components/Flightimg";
import Footer from "./Components/Footer";
function App() {
  const [isFullScreen, setIsFullscreen] = useState(window.innerWidth > 1024)
  useEffect(() => {
    const handleResize = () => {
      setIsFullscreen(window.innerWidth > 1024)
    }
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize)
  }, [])
  return (              
    <div> 
      <Header />
      <Category />
      <BannerCarousel/>    
      <ProductList />
      <VioletDeals dataSource={"/Violet.json"}/>
      <Trends dataSource="./Trends.json" title="Tyoohar Trends" />
      <div className="discount-main">
        <Discounts dataSource="/Discount.json" title="Discounts for you" />
        {isFullScreen && (
          <>
            <Discounts dataSource="/Mobiles.json" title="Mobiles To Check Out" />
            <Discimg />
          </>
        )}
      </div>
      <Trends dataSource="./phone.json" title="Mobiles" />

      <VioletDeals dataSource={"/Violet2.json"} />
      {!isFullScreen && (
        <>
          <Discounts dataSource="/Mobiles.json" title="Mobiles To Check Out" />
        </>
      )}
      <Flightimg />
      <Footer />
    </div>
  )
}
export default App