import React, { useEffect, useState } from "react";
import Header1 from "./Components2/Header1";
import Filter2 from "./Components2/Filter2";
import Product2 from "./Components2/Product2";
import Hon from "./Components2/Hon";
import "./Components2/Flip2.css";

function MobileNext() {
  const [products, setproduct] = useState([]);
  const [Ram, setRam] = useState([]);
  const [RamFilter, setRamFilter] = useState([]);
  const [internal, setinternal] = useState([])
  const [internalFilter, setInternalFilter] = useState([])
  const [Brand, setBrand] = useState([])
  const [BrandFilter, setBrandFilter] = useState([])
  const [Screen, setSreen] = useState([])
  const [ScreenFilter, setScreenFilter] = useState([])
  const [battery, setbattery] = useState([])
  const [BatteryFilter, setBatteryFilter] = useState([])
  const [Discount, setDiscount] = useState([])
  const [DiscountFilter, setDiscountFilter] = useState([])
  const [Primary,setPrimary]=useState([])
  const [primaryFilter,setPrimaryFilter]=useState([])
  const [Secondary,setSecondary]=useState([])
  const [SecondaryFilter,setSecondaryFilter]=useState([])
  const [rating,setrating]=useState([])
  const [ratingFilter,setratingFilter]=useState([])
  const [priceFilter,setpriceFilter]=useState({min:0,max:Infinity})

  useEffect(() => {
    fetch("/Apple.json")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);

        const uniqueRam = [...new Set(data.map((p) => p.RAMcheck))];
        const uniqueInternal = [
          { label: "128 - 255.9 GB", min: 128, max: 255.9 },
          { label: "256 GB & Above", min: 256, max: Infinity },
          { label: "64 - 127.9 GB", min: 64, max: 127.9 }
        ]
        const uniqueScreen = [
          { label: "6 - 6.3 inch", min: 6, max: 6.3 },
          { label: "6.4 inch & Above", min: 6.4, max: Infinity }
        ]
        const uniqueBrand = [...new Set(data.map((p) => p.brand))]
        const uniqueBattery = [
          { label: "5000 - 5999 mAh", min: 5000, max: 5999 },
          { label: "5000 mAh Above", min: 5000, max: Infinity },
          { label: "4000 - 4999 mAh", min: 4000, max: 4999 }
        ]
        const uniqueDiscount = [
          { label: "10% or more", min: 10, max: Infinity },
          { label: "20% or more", min: 20, max: Infinity },
          { label: "30% or more", min: 30, max: Infinity }
        ]
        const uniquePrimary=[
          {label:"12 - 15.9 MP",min:12,max:15.9},
          {label:"48 - 63.9 MP" ,min:48,max:63.9}  
        ]
        const uniqueSecondary=[
          {label:"12 - 15.9 MP",min:12,max:15.9},
          {label:"5 - 7.9",min:5,max:7.9}
        ]
        const uniqueRating=[
          {label:"4★ & above",min:4,max:Infinity},
          {label:"5★ & above",min:5,max:Infinity}
        ]

        setRam(uniqueRam)
        setinternal(uniqueInternal)
        setBrand(uniqueBrand)
        setSreen(uniqueScreen)
        setbattery(uniqueBattery)
        setDiscount(uniqueDiscount)
        setPrimary(uniquePrimary)
        setSecondary(uniqueSecondary)
        setrating(uniqueRating)


      });
  }, []);

  // FILTERING LOGIC
  const filteredProducts = products.filter((p) => {
    const matchRam =
      RamFilter.length === 0 || RamFilter.includes(p.RAMcheck);

    const matchInternal =
      internalFilter.length === 0 || internalFilter.some((range) => p.Internalcheck >= range.min && p.Internalcheck <= range.max);

    const brandmatch =
      BrandFilter.length === 0 || BrandFilter.includes(p.brand)

    const matchScreen =
      ScreenFilter.length === 0 || ScreenFilter.some((range) => p.Screensize >= range.min && p.Screensize <= range.max)

    const matchbattery =
      BatteryFilter.length === 0 || BatteryFilter.some((range) => p.batterycheck >= range.min && p.batterycheck <= range.max)
                             
    const matchdiscount =
      DiscountFilter.length === 0 || DiscountFilter.some((range) => p.discount >= range.min && p.discount <= range.max)   

    const matchprimary=
      primaryFilter.length===0|| primaryFilter.some((range)=>p.primary>=range.min && p.primary<=range.max)

    const matchsecondary=
      SecondaryFilter.length===0||SecondaryFilter.some((range)=>p.secondary>=range.min&&p.secondary<=range.max)
    
    const matchrating=
      ratingFilter.length===0||ratingFilter.some((range)=>p.green>=range.min&&p.green<=range.max)

     const price =
       parseInt(p.price.replace(/₹|,/g, ""));

      
       

    return matchRam && matchInternal && brandmatch && matchScreen && matchbattery && matchdiscount&& matchprimary && matchsecondary && matchrating &&   price >= priceFilter.min && price <= priceFilter.max;;
  });
  return(                 
    <>                                                     
      <div><Header1 /></div>  
      <div className="body-container">   
     
        <div>        
          <Filter2      
            Ram={Ram} setRamFilter={setRamFilter}
            internal={internal} setInternalFilter={setInternalFilter}
            Brand={Brand} setBrandFilter={setBrandFilter}
            Screen={Screen} setScreenFilter={setScreenFilter}
            battery={battery} setBatteryFilter={setBatteryFilter}
            Discount={Discount} setDiscountFilter={setDiscountFilter}
            Primary={Primary} setPrimaryFilter={setPrimaryFilter}
            Secondary={Secondary} setSecondaryFilter={setSecondaryFilter}
            rating={rating} setratingFilter={setratingFilter}
            priceFilter={priceFilter} setpriceFilter={setpriceFilter}
          />
         <Hon/>
          
        </div>
       
          
        
          <div className="Products-container2">
          <Product2 products={filteredProducts}/>       
        </div> 
       
                    
      </div>
    </>
  );
}

export default MobileNext;
        
       