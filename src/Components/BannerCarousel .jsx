import React, { useState, useEffect } from "react";
import "./Flip.css";
import Banner from "./image/Banner.png";
import Banner2 from "./image/Banner2.png";
import Banner3 from "./image/Banner3.png";
import Banner4 from "./image/Banner4.png";
import sale from "./image/sale.png"
const BannerCarousel = ()=>{
  const images=[
    {id:1,src:Banner,alt:"Banner1"},  
    {id:2,src:Banner2,alt:"Banner2"},
    {id:3,src:Banner3,alt:"Banner3"},   
    {id:4,src:Banner4,alt:"Banner4"},           
  ]                                         
  const[Current,setCurrent]=useState(0)
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrent((prev)=>(prev+1)%images.length)
    },3000)                    
    return()=>clearInterval(interval)                    
  },[images.length])                                                                      
  
    const handlePrev=()=>{
      setCurrent((prev)=>(prev-1+images.length)%images.length)
    }
    const handleNext=()=>{
      setCurrent((prev)=>(prev+1)%images.length)                         
    }
  return(                          
    <div className="main-banner">
    <div className="carousel-container">  
      <div className="carousel-track">                    
      <img            
       src={images[Current].src}
       alt={images[Current].alt}
       className="carousal-image"
      />   
      </div>                        
      <button className="btn-left" onClick={handlePrev}> <svg></svg> </button> 
      <button className="btn-right" onClick={handleNext}><svg></svg> </button>

     <div className="main-down">                                      
  <div className="down">  
    {images.map((_, index)=>(
      <div
        key={index}                
        className={`dot ${Current===index ? "active" : ""}`}
        
      ></div>
    ))}
  </div>
</div>
</div>
<div className="sale"></div>
<img className="sale-img" src={sale} alt="" />
</div>
)                            
}
export default BannerCarousel



    









           