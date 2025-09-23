import React, { useState, useEffect } from "react";
function Product2({products}) {
   
    if(products.length===0){
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
                            <div className="relevence2">Relevance</div>
                            <div className="popularity2">Popularity</div>
                            <div className="low2">Price -- Low to High</div>
                            <div className="high2">Price -- High to Low</div>
                            <div className="new2">Newest First</div>
                        </div>
                    </div> 
                </div>
            </div>                     
                                  
            {/* -----------PRODUCT-LISTING------------- */}
            <div className="product-listing1">
                {products.map((item) => (
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
                                            {item.green && (<div className="product-rating">
                                                <span className="green-main"><div className="green-main2">{item.green}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" class="Rza2QY"></img></div></span>
                                                <span className="green-rating"> {item.Ratings}</span>
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
                                                    {item.ratecut && (<div className="rate-cut">{item.ratecut}</div>)}

                                                    {item.off && (<div className="offer2"><span>{item.off}</span> </div>)}

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

                                            <div className="bank-offer2">
                                                <div className="bank-offer3">
                                                    <div className="bank-txt">
                                                        {item.bankoffer}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                ))}

            </div>


        </div>
    )
}
export default Product2




