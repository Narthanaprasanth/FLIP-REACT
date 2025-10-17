import React, { useEffect, useState } from "react";
import min from "./image/minute.png"
import mob from "./image/mob.png"
import fashion from "./image/fashion.png"
import electroincs from "./image/electronics.png"
import home from "./image/home.png"
import tv from "./image/tv.png"
import flight from "./image/flight.png"
import beauty from "./image/beauty.png"
import grocery from "./image/grocery.png"
import topdown from "../data/topdown.json"
import { Link } from "react-router-dom"
import "./Flip.css"

function Category() {
    const [hovered, setHovered] = useState(null);
    const [ActiveSubIndex, setActiveSubIndex] = useState(null)
    const [ActiveSubIndex2, setActiveSubIndex2] = useState(null)
    const [ActiveSubIndex3, setActiveSubIndex3] = useState(null)


    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)
    //UPDATE STATE ON RESIZE
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return (
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
                    <Link to="/mobnext" className="mobiles">
                        <div className="mobiles-img">
                            <img src={mob} alt="" />
                        </div>
                        <div className="mobile-txt">
                            <span>Mobiles & Tablets</span>
                        </div>
                    </Link>
                    <div className={`fashion ${hovered === "fashion" ? "active" : ""}`}
                        onMouseEnter={() => setHovered("fashion")}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => isMobile && setHovered(hovered === "fashion" ? null : "fashion")}
                        style={{ position: "relative" }}
                    >
                        <div className="fashion-img">
                            <img src={fashion} alt="" />
                        </div>
                        <div className="fashion-txt">
                            <span>Fashion</span>
                            <svg className={hovered === "fashion" ? "rotate-svg" : ""}></svg>
                        </div>

                        <div style={{ "display": "flex", "flexDirection": "row" }}>
                            <div> {hovered === "fashion" && (
                                <div className="topdown">
                                    {topdown[0].sub.map((item, i) => (
                                        <div className={`top-each ${ActiveSubIndex === i ? "active" : ""} `} style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i} onMouseEnter={() => setActiveSubIndex(i)} onMouseLeave={() => setActiveSubIndex(null)}> <a href="#">{item}</a>
                                            <div className="topdown-svg"> <svg></svg></div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            </div>
                            <div> {hovered === "fashion" && (
                                <div className="topdown2">
                                    {topdown[0].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                        </div>
                                    ))}
                                </div>
                            )}
                            </div>

                            <div> {ActiveSubIndex === 0 && (
                                <div className="topdown2">
                                    {topdown[0].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                            <div className="topdown-svg"> <svg></svg></div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            </div>
                            <div> {ActiveSubIndex === 1 && (
                                <div className="topdown2">
                                    {topdown[0].sub3.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                            <div className="topdown-svg"> <svg></svg></div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            </div>
                            <div> {ActiveSubIndex === 2 && (
                                <div className="topdown2">
                                    {topdown[0].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                            <div className="topdown-svg"> <svg></svg></div>
                                        </div>
                                    ))}
                                </div>
                            )}                          
                            </div>
                        </div>
                    </div>
                    <div className={`electronics ${hovered === "electronics" ? "active" : ""}`}
                        onMouseEnter={() => setHovered("electronics")}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => isMobile && setHovered(hovered === "electronics" ? null : "electronics")}
                        style={{ position: "relative" }}
                    >
                        <div className="electronics-img">
                            <img src={electroincs} alt="" />
                        </div>
                        <div className="electronics-txt">
                            <span>Electronics</span>
                            <svg className={hovered === "electronics" ? "rotate-svg" : ""}></svg>
                        </div>
                        <div style={{ "display": "flex", "flexDirection": "row" }}
                        >
                            <div>{hovered === "electronics" ? (
                                <div className="topdown3">
                                    {topdown[1].sub.map((item, i) => (
                                        <div className={`top-each ${ActiveSubIndex2 === i ? "active" : ""}`} style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i} onMouseEnter={() => setActiveSubIndex2(i)} onMouseLeave={(null)}> <a href="#">{item}</a>
                                            <div className="topdown-svg"> <svg></svg> </div>
                                        </div>
                                    ))}
                                </div>
                            ) : ""}
                            </div>
                            <div>{hovered === "electronics" && (
                                <div className="topdown4">
                                    {topdown[1].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                        </div>
                                    ))}
                                </div>
                            )}
                            </div>
                            <div>{ActiveSubIndex2 === 0 && (
                                <div className="topdown4">
                                    {topdown[1].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                        </div>

                                    ))}
                                </div>
                            )}
                            </div>
                            <div>{ActiveSubIndex2 === 2 && (
                                <div className="topdown4">
                                    {topdown[1].sub3.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                        </div>

                                    ))}
                                </div>
                            )}
                            </div>


                        </div>

                    </div>
                    <div className={`home ${hovered === "home" ? "active" : ""}`}
                        onMouseEnter={() => setHovered("home")}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => isMobile && setHovered(hovered === "home" ? null : "home")}

                        style={{ position: "relative" }}
                    >
                        <div className="home-img">
                            <img src={home} alt="" />
                        </div>
                        <div className="home-txt">
                            <span>Home & Furniture</span>
                            <svg className={hovered === "home" ? "rotate-svg" : ""}></svg>
                        </div>
                        <div style={{ "display": "flex", "flexDirection": "row" }}>
                            <div>{hovered === "home" && (
                                <div className="topdown5">
                                    {topdown[2].sub.map((item, i) => (
                                        <div className={`top-each ${ActiveSubIndex3 === i ? "active" : ""} `} style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i} onMouseEnter={() => setActiveSubIndex3(i)} onMouseLeave={() => setActiveSubIndex3(null)}> <a href="#">{item}</a>
                                            <div className="topdown-svg"> <svg></svg> </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            </div>
                            <div>{hovered === "home" ? (
                                <div className="topdown6">
                                    {topdown[2].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                            </div>
                            <div> {ActiveSubIndex3 === 0 ? (
                                <div className="topdown6">
                                    {topdown[2].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                            </div>



                            <div> {ActiveSubIndex3 === 2 ? (
                                <div className="topdown6">
                                    {topdown[0].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                            </div>


                        </div>
                    </div>
                    <div className="tv">
                        <div className="tv-img">
                            <img src={tv} alt="" />
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
                    <div className={`beauty ${hovered === "beauty" ? "active" : ""}`}
                        onMouseEnter={() => setHovered("beauty")}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => isMobile && setHovered(hovered === "beauty" ? null : "beauty")}
                        style={{ position: "relative" }}
                    >
                        <div className="beauty-img">
                            <img src={beauty} alt="" />
                        </div>
                        <div className="beauty-txt">
                            <span>Beauty,Food..</span>
                            <svg className={hovered === "beauty" ? "rotate-svg" : ""}></svg>
                        </div>
                        <div style={{ "display": "flex", "flexDirection": "row" }}>
                            <div>{hovered === "beauty" && (
                                <div className="topdown7">
                                    {topdown[2].sub.map((item, i) => (
                                        <div className="top-each" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                            <div className="topdown-svg"><svg></svg></div>
                                        </div>

                                    ))}
                                </div>
                            )}
                            </div>
                            <div>{hovered === "beauty" && (
                                <div className="topdown8">
                                    {topdown[2].sub2.map((item, i) => (
                                        <div className="top-each1" style={{ "display": "flex", "flexDirection": "row", "padding": "12px 16px" }} key={i}> <a href="#">{item}</a>
                                        </div>

                                    ))}
                                </div>
                            )}
                            </div>
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








































































































































