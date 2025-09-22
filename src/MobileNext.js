import React, { useEffect, useState } from "react";
import Header1 from "./Components2/Header1";
import Filter2 from "./Components2/Filter2";
import Product2 from "./Components2/Product2";
import "./Components2/Flip2.css";

function MobileNext() {
  const [products, setproduct] = useState([]);
  const [Ram, setRam] = useState([]);
  const [RamFilter, setRamFilter] = useState([]);
  const[internal,setinternal]=useState([])
  const [internalFilter,setInternalFilter]=useState([])

  useEffect(() => {
    fetch("/Apple.json")        
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);

        const uniqueRam = [...new Set(data.map((p) => p.RAMcheck))];
        const uniqueInternal=[
                    {label:"128 - 255.9 GB",min:128,max:255.9},
                    {label:"256 GB & Above",min:256,max:Infinity},
                    {label:"64 - 127.9 GB",min:64,max:127.9}
        ]
        setRam(uniqueRam);
        setinternal(uniqueInternal)

      });
  }, []);

  // FILTERING LOGIC
const filteredProducts = products.filter((p) => {
  const matchRam =
    RamFilter.length === 0 || RamFilter.includes(p.RAMcheck);

  const matchInternal =
    internalFilter.length === 0 || internalFilter.some((range)=>p.Internalcheck>=range.min && p.Internalcheck<=range.max);
  return matchRam && matchInternal; 
});                                      
           
  return(
    <>
      <div><Header1 /></div>  
      <div className="body-container">
        <div className="filter-container2">
          <Filter2 
          Ram={Ram} setRamFilter={setRamFilter} 
          internal={internal} setInternalFilter={setInternalFilter}/>
        </div>   
        <div className="Products-container2">
          <Product2 products={filteredProducts} />
        </div>
      </div>
    </>
  );
}

export default MobileNext;     
                              

