import React, { useState, useEffect } from "react";
import wow from "./image2/wow.png"
import arrow from "./image2/arrow.png"
import time from "./image2/time.png"
function Product2({ products,externalfilter }) {
    const [productList, setproductList] = useState(products)
    const [activesort, setactivesort] = useState("popularity")

    useEffect(() => {
        setproductList(products)
    }, [products])
    useEffect(()=>{
        setactivesort(externalfilter)
        switch(externalfilter){
            case "popularity":
                popularity()
                break
            case "low":
                sortpricebylowprice()
                break
            case "high":
                sortpricebyhighprice()
                break
            case "new":
                newest()
                break
                default:
                    break
        }
    },[externalfilter])

    const sortpricebylowprice = () => {
        const sorted = [...productList].sort((a, b) => {
            const priceA = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '')) : a.price;
            const priceB = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '')) : b.price;
            return priceA - priceB
        })
        setproductList(sorted)
        setactivesort("low")
    }

    const sortpricebyhighprice = () => {
        const sorted = [...productList].sort((a, b) => {
            const priceA = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '')) : a.price;
            const priceB = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '')) : b.price;
            return priceB - priceA
        })
        setproductList(sorted)
        setactivesort("high")
    }



    const newest = (id) => {
        const filtered = [...productList].sort((a, b) => a.id - b.id)
        setproductList(filtered)
        setactivesort("new")
    }
    const popularity = (id) => {
        const filtered = [...productList].sort((a, b) => a.id - b.id)
        setproductList(filtered)
        setactivesort("popularity")
    }
    if (products.length === 0) {
        return <h3>No products found</h3>
    }
    return (
        <div className="product-main">
            <div className="product-top">
                <div className="product-top2">
                    <div className="product-top3">
                        <div className="home-data">
                            <div className="home2">
                                <a href="#">Home</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" class="wMLTcO"></path></svg>

                            </div>
                            <div className="accessories2">
                                <a href="#">Mobiles & Accessories</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" class="wMLTcO"></path></svg>
                            </div>
                            <div className="mob-new">
                                <a href="#">Mobiles</a>
                            </div>
                        </div>
                        <span className="sort-span">Showing 1 – 24 of 707 results for "apple mobiles"</span>
                        <div className="sort-container">
                            <span className="sort2">Sort By</span>
                            {/* <div className="relevence2">Relevance</div> */}
                            <div className={`popularity2 ${activesort === "popularity" ? "activesort" : ""}`} onClick={popularity}>Popularity</div>
                            <div className={`low2 ${activesort === "low" ? "activesort" : ""}`} onClick={sortpricebylowprice}>Price -- Low to High</div>
                            <div className={`high2 ${activesort === "high" ? "activesort" : ""}`} onClick={sortpricebyhighprice}>Price -- High to Low</div>
                            <div className={`new2 ${activesort === "new" ? "activesort" : ""}`} onClick={newest}>Newest First</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -----------PRODUCT-LISTING------------- */}
            <div className="product-listing1">
                {productList.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="product-listing2">
                            <div className="product-listing3">
                                <div className="product-listing4">
                                    <div className="product-main1">

                                        <div className="apple-item1">
                                            {item.seller && (<div className="best-seller">
                                                {item.seller}
                                            </div>
                                            )}

                                            <div className="apple-item2">
                                                <div className="apple-item3">
                                                    <div className="apple-item4">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                </div>
                                                {item.unavailable && (<div className="unavailable">
                                                    <span>{item.unavailable}</span>
                                                </div>)}

                                            </div>
                                            <div className="compare2">
                                                <div className="compare3">
                                                    <span className="compare3-span">
                                                        <label> <input type="checkbox" /></label>
                                                    </span>
                                                    <label className="add"><span>Add to Compare</span></label>

                                                </div>
                                            </div>
                                            <div className="heart2">
                                                <div className="heart3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-datas">

                                            <div className="product-items2">
                                                <div className="product-title">{item.title}</div>
                                                {window.innerWidth > 1024 ? (<div className="product-rating">
                                                    <span className="green-main"><div className="green-main2">{item.green}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" class="Rza2QY"></img></div></span>
                                                    <span className="green-rating"> {item.Ratings}</span>

                                                </div>) :

                                                    (<div className="equal"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" class="bi bi-star-half" viewBox="0 0 16 16">
                                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                                        </svg>
                                                        <span className="green-rating">( {item.ratingsmini})</span>

                                                        <img className="fimg" src={item.fassure} alt="" />


                                                    </div>)}


                                                <div className="main-data">
                                                    <ul className="main-data1">
                                                        <li className="rom">{item.RAM} {item.ROM} {item.TB}</li>
                                                        <li className="rom">{item.Display}</li>
                                                        <li className="rom">{item.Frontcamera}</li>
                                                        {item.battery && (<li className="rom">{item.battery}</li>)}
                                                        <li className="rom">{item.Processor}</li>
                                                        <li className="rom">{item.warrenty}</li>

                                                    </ul>
                                                </div>

                                            </div>

                                            <div className="price-container2">
                                                <div className="price2">
                                                    <div className="price3">
                                                        <div className="rate">
                                                            {item.price}
                                                        </div>
                                                        {window.innerWidth > 1024 ? (<div>
                                                            {item.ratecut && (<div className="rate-cut">{item.ratecut}</div>)}
                                                            {item.off && (<div className="offer2"><span>{item.off}</span> </div>)}
                                                        </div>) : (
                                                            <div>
                                                                <div className="wow">
                                                                    <img src={wow} alt="" />
                                                                    <span className="wow-new">{item.wow}</span>
                                                                    <span className="bank-blue">with Bank offer</span>
                                                                </div>
                                                            </div>
                                                        )}



                                                    </div>
                                                </div>

                                                <div className="f-assured2">
                                                    <img src={item.fassure} alt="" />
                                                </div>
                                                {item.upto && (<div className="exchange-main2">
                                                    <div className="exchange-main3">
                                                        <div className="upto2">Upto  </div>
                                                        <div className="upto-rate">{item.upto}</div>
                                                        <div className="off-on">Off on Exchange</div>
                                                    </div>
                                                </div>)}
                                                {window.innerWidth > 1024 ? (<div className="bank-offer2">
                                                    <div className="bank-offer3">
                                                        <div className="bank-txt">
                                                            {item.bankoffer}
                                                        </div>
                                                    </div>
                                                </div>) : (
                                                    <div className="year">
                                                        <span>{item.warrentynew}</span>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                        <div className="heart-5"><svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#fff" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg></div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {(index + 1) % 4 === 0 && (
                            <div className="custom-divider">
                                {(() => {
                                    const group = (index + 1) / 4
                                    switch (group) {
                                        case 1:
                                            return <div className="blue-container">
                                                <div className="blue-container1">
                                                    <div className="blue-content">
                                                        <div className="bluecontent2">
                                                            <span className="blue-span">Which Processor Brand are you looking for ? </span>
                                                        </div>
                                                    </div>
                                                    <div className="blue-box">
                                                        <div className="blue-box2">
                                                            <div className="blue-box3">
                                                                <div className="bluebox1">
                                                                    <div className="bluebpox2">
                                                                        <div className="bluebox3"><span>unisoc</span></div>
                                                                    </div>

                                                                </div>
                                                                <div className="bluebox1">
                                                                    <div className="bluebpox2">
                                                                        <div className="bluebox3"><span>Qualcomm</span></div>
                                                                    </div>

                                                                </div>
                                                                <div className="bluebox1">
                                                                    <div className="bluebpox2">
                                                                        <div className="bluebox3"><span>Mediatek</span></div>
                                                                    </div>

                                                                </div>
                                                                <div className="bluebox1">
                                                                    <div className="bluebpox2">
                                                                        <div className="bluebox3"><span>Snapdragon</span></div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        case 2:
                                            return <div className="vil-box1">
                                                <div className="vil-box2">
                                                    <div className="vil-top1">
                                                        <div className="vil-top2">
                                                            <div className="vil-top3">
                                                                <div className="vil-text1">Top Sale Deals </div>
                                                                <div className="vil-text2"> <img src={time} alt="" />Shop at unbeatable prices </div>
                                                            </div>
                                                            <div>
                                                                <div className="vil-arrow"><img src={arrow} alt="" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="add-mobiles">
                                                            {productList.slice(0, 3).map((item) => (
                                                                <div key={item.id} className="product-card">
                                                                    <div className="product-card1">
                                                                        <div>
                                                                            <img
                                                                                src={item.image}
                                                                                alt={item.title}
                                                                                className="product-img"
                                                                            />
                                                                        </div>
                                                                        <div className="sec-22">
                                                                            <p className="para2">{item.title}</p>
                                                                            <span className=" span-rom">{item.ROM}</span>
                                                                            <div className="col55">
                                                                                <div className="cut22">{item.ratecut}</div>
                                                                                <div className="real-price">{item.price}</div>

                                                                            </div>
                                                                            <div className="discount22">{item.discount}% off</div>

                                                                        </div>
                                                                    </div>
                                                                    <div className="fullest1">
                                                                        <div className="fullest">
                                                                            <div className="product-card2">
                                                                                <div className="para3">
                                                                                    <span className="ram-rom22">{item.Internalcheck}GB RAM | {item.ROM} ROM</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-card2">
                                                                                <div className="para3">
                                                                                    <span className="ram-rom22">{item.Display}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="fullest">
                                                                            <div className="product-card2">
                                                                                <div className="para3">
                                                                                    <span className="ram-rom22">{item.Processor}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-card2">
                                                                                <div className="para3">
                                                                                    <span className="ram-rom22">{item.Frontcamera}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                         }
                                })()}
                            </div>
                        )}

                    </React.Fragment>

                ))}

            </div>

 
        </div >
    )
}
export default Product2


  


   














