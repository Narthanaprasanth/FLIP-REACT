import React, { useEffect, useState } from "react";

const Trends=()=>{
    const [trends,settrends]=useState([])
    const[startIndex,setstartindex]=useState(0)
    const[isMobile,setIsMobile]=useState(window.innerWidth<=1024)

    useEffect(()=>{
        fetch("/Trends.json")
        .then((response)=>response.json())
        .then((data)=>settrends(data))
        .catch((error)=>console.log("Error Fetching Data:",error))
    },[])

    useEffect(()=>{
        const handleResize=()=>setIsMobile(window.innerWidth<=1024)
        window.addEventListener("resize",handleResize);
        return()=>window.removeEventListener("resize",handleResize)
    },[])

    const shownext=()=>{
  if(startIndex+7 <trends.length){
    setstartindex((prev)=>prev+1)
  }
}
const showprev=()=>{
  if(startIndex>0){
    setstartindex((prev)=>prev-1)
  }
}            
    return(
        <div className="main-container1">
        <div className="Trend-container">               
            <h2>Tyohaar Trends</h2>
            <div className="inner-Trends">
                {trends.slice(startIndex,startIndex+7).map((trend,index)=>(
                    <div className="cover2" key={index}>
                        <div className="prod2">
                            <img src={trend.image} alt={trend.name}
                            style={{
                                width:trend.id===8 ? "153px" :"153px",
                                height:"153px",
                                objectFit:"contain"
                            }} />
                        </div>
                        <div className="labels2">
                            <h3>{isMobile? trend.shorttext : trend.fulltext}</h3>
                            <p>{trend.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        <button className="btn-left2" onClick={showprev}><svg></svg></button>
        <button className="btn-right2" onClick={shownext}><svg></svg></button>
        </div>
        </div>
    )
}
export default Trends