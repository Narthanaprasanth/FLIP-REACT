import React from "react";
function Footer() {
    return (
        <div className="footer-container">

            <div className="footer-content">
                <div className="about">
                    <span>ABOUT</span>
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Flipkart Stories</a>
                    <a href="#">Press</a>
                    <a href="#">Corporate information</a>
                </div>
                <div className="about">
                    <span>GROUP COMPANIES</span>
                    <a href="#">Myntra</a>
                    <a href="#">Cleartrip</a>
                    <a href="#">Shopsy</a>
                </div>
                <div className="about">
                    <span>HELP</span>
                    <a href="#">Payments</a>
                    <a href="#">Shipping</a>
                    <a href="#">Cancellation & Returns</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="mail1" style={{ "border": "none", "padding": "0px" }}>
                    <span>CONSUMER POLICY</span>
                    <a href="#">Cancellation & Returns</a>
                    <a href="#">Terms Of Use</a>
                    <a href="#">Security</a>
                    <a href="#">Privacy</a>
                    <a href="#">Sitemap</a>
                    <a href="#">Grievance Redressal</a>
                    <a href="#">EPR Compliance</a>
                </div>

                <div className="mail1">
                    <span>Mail Us:</span>
                    <div className="second">
                        <a href="#">Flipkart Internet Private Limited,</a>
                        <a href="#">Buildings Alyssa, Begonia &</a>
                        <a href="#">Clove Embassy Tech Village,</a>
                        <a href="#">Outer Ring Road, Devarabeesnahalli Village,</a>
                        <a href="#">Bengaluru, 560103</a>
                        <a href="#">karnataka, India</a>

                    </div>
                    <span>social:</span>
                    <div className="social">
                        <div className="soc-img">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Facebook" width="24" height="24"></img>
                        </div>
                        <div className="soc-img">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="Twitter" width="24" height="24"></img>
                        </div>
                        <div className="soc-img">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg" alt="YouTube" width="24" height="24"></img>
                        </div>
                        <div className="soc-img">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/InstagramLogo-43f906.svg" alt="Instagram" width="20" height="20"></img>
                        </div>
                    </div>
                </div>
                <div className="mail">
                    <span>Registered Office Address</span>
                    <a href="#">Flipkart Internet Private Limited,</a>
                    <a href="#">Buidings Alyssa,Begonia &</a>
                    <a href="#">Clove Embassy Tech Village,</a>
                    <a href="#">Outer Ring Road, Devarabeesanahali Village,</a>
                    <a href="#">Bangaluru, 560103,</a>
                    <a href="#">Karnatak,India</a>
                    <a href="#">CIN : U51109KA2021PTC066107</a>
                    <a href="#"><div className="combine">Telephone: <div className="blue">044-45614700 </div> / <div className="blue"> 044-67415800</div> </div></a>
                </div>
            </div>
            <div className="footer-deep">
                <div className="deep">
                    <div className="deepimg">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="Become a Seller" width="13" height="12"></img>
                        <span>Become a Seller</span>
                    </div>
                    <div className="deepimg">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg" alt="Advertise" width="14" height="14"></img>
                        <span>Advertise</span>
                    </div>
                    <div className="deepimg">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg" alt="Gift Cards" width="13" height="13"></img>
                        <span>Gift Cards</span>
                    </div>
                    <div className="deepimg">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg" alt="Help Center" width="13" height="13"></img>
                        <span> Help Center</span>
                    </div>
                    <div className="deepimg">
                        <span>© 2007-2025 Flipkart.com</span>
                    </div>
                    <div className="deepimg">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods"></img>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer

























