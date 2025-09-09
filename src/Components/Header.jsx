import React from "react"
import image from "./image/explore.png"
import log from "./image/login.png"
import svg from "./image/svg.png"
import cart from "./image/cart.png"
import seller from "./image/seller.png"
import dots from "./image/dots.png"
import "./Flip.css"
function Header(){
    return(
        <div className="header-container">
            <div className="Header-inner" style={{marginLeft:"59px"}}>
                <div className="Flip-explore" style={{background:"white" ,marginRight:"6px"}}>
                    <img style={{background:"white",width:"125px",height:"40px"}} src={image} alt="flip explore" />
                </div>
                <div className="search-container" style={{background:"white"}}>
                   <form className="forms" >
                    <div className="search-button">
                        <button type="submit" style={{background:"rgba(0, 0, 0, 0)",height:"39px"}}  ><svg style={{background:"rgba(0, 0, 0, 0)"}} width="24" height="30" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                    </div>
                    <div className="Search-input">
                        <input type="text" placeholder="Search for Products ,Brands and More" />
                    </div>
                   </form>
                </div>                                     
                <div className="head-mid">
                  <div className="login-container">                    
                        <div className="login-inner">
                            <div className="login-img" style={{background:"white",marginRight:"8px"}}><img src={log} alt="" /></div>
                             <div className="login-txt"><span>Login</span></div>
                             <div style={{background:"white",marginLeft:"8px"}}><img style={{background:"white"}} src={svg} alt="" /></div>

                        </div>
                   </div>
                <div className="cart-container">   
                    <div className="cart">
                      <img style={{background:"white",marginRight:"8px"}} src={cart} alt="" />
                       <span style={{background:"white",fontFamily:"Regular"}}>Cart</span>
                    </div>
                </div>
                 <div className="seller-container">
                    <div className="seller" >
                       <img style={{background:"white",marginRight:"8px"}} src={seller} alt="" /> 
                       <span style={{background:"white",fontFamily:"Regular"}}>Become a Seller</span>
                    </div>           
                </div>
                <div className="dots"><img className="dots-img" src={dots} alt="" /></div>
            </div>
            </div>
            
            

        </div>
        
    )
}
export default Header               


























                                                    
    
               
         