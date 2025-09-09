import React, { useEffect, useState } from "react";
import flightside from "./image/flightside.png";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const[startIndex,setStartIndex]=useState(0)

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error Fetching Data:", error));
  }, []);

const shownext=()=>{
  if(startIndex+6 <products.length){
    setStartIndex((prev)=>prev+2)
  }
}
const showprev=()=>{
  if(startIndex>0){
    setStartIndex((prev)=>prev-2)
  }                                                                               
  return (                                    
    <div className="main-container">
      <div className="electro-container">
        <h2>Best of Electronics</h2>
        <div className="inner-electro">
          {products.slice(startIndex, startIndex + 6).map((product, index) => (
            <div className="cover" key={index}>                                        
              <div className="prod">
                <img src={product.image} alt={product.name}
                style={{
    width: product.id === 7 ? "153px" : "153px",                                         
    height: "152px",
    objectFit: "contain"
  }} />                          
              </div>
              <div className="labels">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>                                                          
            </div>                                                                                                   
          ))}
        </div>
        <button className="btn-left2" onClick={showprev}><svg></svg></button>
        <button className="btn-right2" onClick={shownext}><svg></svg></button>
      </div>
                                            
      <div className="flight-booking">
        <img src={flightside} alt="Flight Booking"/>
      </div>
    </div>
  );
};      
}                        
export default ProductList;








