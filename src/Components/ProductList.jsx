import React, { useEffect, useState } from "react";
import flightside from "./image/flightside.png";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Fetch JSON
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error Fetching Data:", error));
  }, []);

  // Track screen resize
  useEffect(()=>{
    const handleResize=()=>setIsMobile(window.innerWidth<=1024)
    window.addEventListener("resize",handleResize);
    return()=>window.removeEventListener("resize",handleResize)
  },[])

  // Pagination
  const showNext = () => {
    if (startIndex + 6 < products.length){
      setStartIndex((prev) => prev + 2);
    }
  };
  const showPrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 2);
    }
  };
  return (
    <div className="main-container">
      <div className="electro-container">
        <h2>Top Deals</h2>
        <div className="inner-electro">
          {products.slice(startIndex, startIndex + 6).map((product, index) => (
            <div className="cover" key={index}>
              <div className="prod">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "153px",
                    height: "152px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="labels">
                
                <h3>{isMobile ? product.shorttext : product.fulltext}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-left2" onClick={showPrev}>
          <svg></svg>
        </button>
        <button className="btn-right2" onClick={showNext}>
          <svg></svg>
        </button>
      </div>

      <div className="flight-booking">
        <img src={flightside} alt="Flight Booking" />
      </div>
    </div>
  );
};

export default ProductList;
