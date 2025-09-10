import React from "react"
import image from "./image/explore.png"
import log from "./image/login.png"
import svg from "./image/svg.png"
import cart from "./image/cart.png"
import seller from "./image/seller.png"
import dots from "./image/dots.png"
import menu from "./image/menu.png"
import expl from "./image/expl.png"
import "./Flip.css"
function Header(){
    return(                
        <div className="header-container">
            <div className="inside">
            <div className="Header-inner">
                <img className="menu" src={menu} alt="" style={{"width":"24px","height":"24px"}} />
                <div className="Flip-explore">
                    <img src={image} alt="" />
                </div>
                                                        
                   <form className="forms" >
                    <div className="search-button">
                        <button type="submit" style={{background:"rgba(0, 0, 0, 0)",height:"39px"}}  ><svg style={{background:"rgba(0, 0, 0, 0)"}} width="24" height="30" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                    </div>
                    <div className="Search-input">
                        <input type="text" placeholder="Search for Products, Brands and More" />
                    </div>                              
                   </form>                         
                <div className="head-mid">          
                  <div className="login-container">                    
                        <div className="login-inner">
                            <div className="login-img"><img src={log} alt="" /></div>
                             <div className="login-txt"><span>Login</span></div>
                             <div className="log-img" style={{marginLeft:"8px"}}><img src={svg} alt="" /></div>
                        </div>
                   </div>                          
                <div className="cart-container">                                             
                    <div className="cart"> 
                      <img style={{background:"white"}} src={cart} alt=""/>
                       <span style={{background:"white",fontFamily:"Regular"}}>Cart</span>
                    </div>
                </div>
                 <div className="seller-container">
                    <div className="seller">
                       <img style={{background:"white",marginRight:"8px"}} src={seller} alt="" /> 
                       <span style={{background:"white",fontFamily:"Regular"}}>Become a Seller</span>
                    </div>           
                </div>
                <div className="dots"><img className="dots-img" src={dots} alt="" /></div>
            </div>                       
          </div>
        </div>
        </div>
    )
}
export default Header


  