import React, { useEffect, useState } from "react";
import Header1 from "./Components2/Header1";
import Filter2 from "./Components2/Filter2";
import Product2 from "./Components2/Product2";
import "./Components2/Flip2.css"


function MobileNext(){
    const [products,setproduct]=useState([])
    const [Ram,setRam]=useState([])

    useEffect(()=>{
        fetch("/Apple.json")
        .then((res)=>res.json())
        .then((data)=>{
            setproduct(data)

            const uniqueRam=[...new Set(data.map((p)=>p.RAMcheck))]
            setRam(uniqueRam)
        })
    },[])
    return(
        <>
         <div><Header1/></div>
         <div className="body-container">
            <div className="filter-container2"><Filter2 Ram={Ram}/></div>
            <div className="Products-container2"><Product2/></div>
         </div>
         </>
                                            
        

    )
}
export default MobileNext
                              
                                     
                                            
                                               


  
            
