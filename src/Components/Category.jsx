import React from "react";
import min from "./image/minute.png"
import mob from "./image/mob.png"                     
import fashion from "./image/fashion.png"
import electroincs from "./image/electronics.png"
import home from "./image/home.png"
import tv from "./image/tv.png"
import flight from "./image/flight.png"
import beauty from "./image/beauty.png"
import grocery from "./image/grocery.png"
import "./Flip.css"                                                                                
function Category(){
    return(
       <div className="category">         
        <div className="category-inner">
            <div className="inner">
                <div className="minutes">
                    <div className="minutes-img">
                        <img src={min} alt="" />
                    </div>
                    <div className="minutes-txt">
                        <span>Minutes</span>
                    </div>
                </div>

            <div className="mobiles">
                <div className="mobiles-img">
                    <img src={mob} alt="" />
                </div>
                <div className="mobile-txt">
                    <span>Mobiles & Tablets</span>
                </div>
            </div>                          
            <div className="fashion">
                <div className="fashion-img">
                    <img src={fashion} alt=""/>
                </div>
                <div className="fashion-txt">           
                    <span>Fashion</span>                                                                   
                    <svg ></svg>
                </div>
            </div>   
               <div className="electronics">
                <div className="electronics-img">
                    <img src={electroincs} alt="" />
                </div>
                <div className="electronics-txt">
                    <span>Electronics</span>
                     <svg ></svg>
                </div>
            </div>                                                       
            <div className="home">
                <div className="home-img">
                    <img src={home} alt=""/>                                                                                                                                                                                                                                            
                     
                </div>
                <div className="home-txt">
                    <span>Home & Furniture</span>                  
                     <svg ></svg>
                </div>
            </div>
             <div className="tv">                                      
                <div className="tv-img">                    
                    <img src={tv} alt=""/>
                </div>
                <div className="tv-txt">        
                    <span>TVs & Appliances</span>
                </div>
            </div>
         
           
           <div className="flight">
            <div className="flight-img">
                <img src={flight} alt="" />
            </div>
            <div className="flight-txt">
                <span>Flight Bookings</span>
            </div>
           </div>
           <div className="beauty">                          
            <div className="beauty-img">
                <img src={beauty} alt="" />
            </div>
            <div className="beauty-txt">
                <span>Beauty,Food..</span>
                <svg ></svg>
            </div>
           </div>
           <div className="grocery">
            <div className="grocery-img">
                <img src={grocery} alt="" />
            </div>
            <div className="grocery-txt">
                <span>Grocery</span>
            </div>
           </div>

            </div>

        </div>
       </div>       
    )
}        
export default Category














