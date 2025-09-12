import React, { useEffect, useState } from "react";
const Discounts=({dataSource,title})=>{
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch(dataSource)
        .then((res)=>res.json())
        .then((data)=>setproducts(data))
        .catch((err)=>console.error("error fetching product:",err))
    },[dataSource])
    return(
        <div className="shop-container">
            <div className="disc-head">
                <h2>{title}</h2>
            </div>
        <div className="whole">
            {products.map((item)=>(
               <div key={item.id} className="shop">
                <div className="shop-img">
                <img src={item.image} 
                alt=""
                className="shoping" />
                 <div className="shop-details">
                <h3 className="shop-name">{item.name}</h3>
                <p className="shop-offer">{item.offers}</p>
                </div>
                </div>
               </div>   
            ))}
         </div>  
        </div>
    )
}
export default Discounts



