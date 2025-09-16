import React, { useEffect, useState } from "react"
import image from "./image/explore.png"
import log from "./image/login.png"
import svg from "./image/svg.png"
import cart from "./image/cart.png"
import seller from "./image/seller.png"
import dots from "./image/dots.png"
import menu from "./image/menu.png"
import "./Flip.css"
function Header() {
    const [show, setshow] = useState(true)
    const [query, setquery] = useState("")
    const [suggestions, setsuggestions] = useState([])
    const [isfocused, setisfocused] = useState(false)

    const products = [
        "shoes",
        "tshirts",
        "laptops",
        "Watches",
        "T V",
        "Sares",
        "Headphones"
    ]
    const handleInputChange = (e) => {
        const value = e.target.value
        setquery(value)
        if (value.trim() === "") {
            setsuggestions(products)
        } else {
            const filtered = products.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            )
            setsuggestions(filtered)
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => setshow(false), 6000)
        return () => clearTimeout(timer)
    })
    return (
        <div className="header-container">
            <div className="inside">
                <div className="Header-inner">
                    <div className="aa">
                        <img className="menu" src={menu} alt="" style={{ "width": "24px", "height": "23px" }} />
                        <div className="Flip-explore">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className="search">
                        <form className="forms">
                            <div className="search-button">
                                 <button type="submit" style={{ background: "rgba(0, 0, 0, 0)", height: "39px" }}  ><svg style={{ background: "rgba(0, 0, 0, 0)" }} width="24" height="30" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            </div>
                            <div className="Search-input">
                                <input type="text" placeholder="Search for Products, Brands and More"
                                    value={query}
                                    onChange={handleInputChange}
                                    className="search-input"
                                    onFocus={() => {
                                        setisfocused(true);
                                        setsuggestions(products);
                                    }}
                                    onBlur={() => {
                                        setTimeout(() => setisfocused(false), 200);
                                    }}/> 
                            </div>
                        </form>                                                        
                        {/* DROP DOWN */}    
                        <div className="search-down">
                            {suggestions.length > 0 && (
                                <ul className="search-dropdown">
                                    {suggestions.map((item, index) => (
                                        <li key={index} 
                                        className="search-item"
                                        onMouseDown={()=>{
                                            setquery(item);
                                            setisfocused(false)
                                        }}>
                                            {item}
                                        
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="head-mid">
                        <div
                            className="login-container">
                            <div className="login-inner">
                                <div className="login-img"><img src={log} alt="" /></div>
                                <div className="login-txt"><span>Login</span></div>
                                <div className="log-img" style={{ marginLeft: "8px" }}><img src={svg} alt="" /></div>
                            </div>
                            <>
                                {show && (
                                    <>
                                        <div className="tri"></div>
                                        <div className="show">
                                            <p>Login</p>
                                        </div>
                                    </>
                                )}
                            </>
                            <div className="log-down">
                                <div className="new-acc">
                                    <div className="new">New customer?</div>
                                    <div className="sign">Sign Up</div>
                                </div>
                                <div className="login-data">

                                    <div className="data">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="My Profile" width="18" height="18"></img>
                                        <span>My Profile</span>
                                    </div>
                                    <div className="data">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="Flipkart Plus Zone" width="18" height="18"></img>
                                        <span>FlipKart Plus Zone</span>
                                    </div>
                                    <div className="data">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="Orders" width="18" height="18"></img>
                                        <span>Orders</span>
                                    </div>
                                    <div className="data">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="Wishlist" width="18" height="18"></img>
                                        <span>Wishlists</span>
                                    </div>
                                    <div className="data">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg" alt="Rewards" width="18" height="18"></img>
                                        <span>Rewards</span>
                                    </div>
                                    <div className="data">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt="Gift Cards" width="18" height="18"></img>
                                        <span>Gift Cards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-container">
                            <div className="cart">
                                <img style={{ background: "white" }} src={cart} alt="" />
                                <span style={{ fontFamily: "Regular" }}>Cart</span>
                            </div>
                        </div>
                        <div className="seller-container">
                            <div className="seller">
                                <img style={{ background: "white", marginRight: "8px" }} src={seller} alt="" />
                                <span style={{ background: "white", fontFamily: "Regular" }}>Become a Seller</span>
                            </div>
                        </div>
                        <div className="main-dot">
                            <div className="dots">
                                <img className="dots-img" src={dots} alt="" />
                            </div>
                            <div className="dot-down">
                                <div className="data">
                                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" alt="Notification Preferences" width="18" height="18"></img>
                                    <span>Notifiacteion Preferences</span>
                                </div>
                                <div className="data">
                                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg" alt="24x7 Customer Care" width="18" height="18"></img>
                                    <span>24x7 Customer Care</span>
                                </div>
                                <div className="data">
                                    <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg" alt="Advertise" width="18" height="18"></img>
                                    <span>Advertise</span>
                                </div>
                                <div className="data">
                                    <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg" alt="Download App" width="18" height="18"></img>
                                    <span>Download App</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header


































