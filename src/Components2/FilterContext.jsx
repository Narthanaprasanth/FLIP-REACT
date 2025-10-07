import { createContext,useState,useEffect } from "react";

export const FilterContext=createContext()

export const FilterProvider=({children})=>{
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
      const [Primary, setPrimary] = useState([])
      const [primaryFilter, setPrimaryFilter] = useState([])
      const [Secondary, setSecondary] = useState([])
      const [SecondaryFilter, setSecondaryFilter] = useState([])
      const [rating, setrating] = useState([])
      const [ratingFilter, setratingFilter] = useState([])
      const [priceFilter, setpriceFilter] = useState({ min: 0, max: Infinity })

     useEffect(() => {
    fetch("/Apple.json")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        setRam([...new Set(data.map((p) => p.RAMcheck))]);
        setBrand([...new Set(data.map((p) => p.brand))]);
      });
  }, []);

  const FilteredProducts=products.filter((p)=>{
    const matchram=RamFilter.length===0||RamFilter.includes(p.RAMcheck)
  })

  return(
    <FilterContext.Provider
      value={{
        products,
        FilteredProducts,
        Ram,
        setRamFilter,
        RamFilter,
      }}>
        {children}
    </FilterContext.Provider>
  )
    
}