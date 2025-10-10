import React, { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setproduct] = useState([]);

  const [Ram, setRam] = useState([]);
  const [RamFilter, setRamFilter] = useState([]);

  const [internal, setinternal] = useState([]);
  const [internalFilter, setInternalFilter] = useState([]);

  const [Brand, setBrand] = useState([]);
  const [BrandFilter, setBrandFilter] = useState([]);

  const [Screen, setSreen] = useState([]);
  const [ScreenFilter, setScreenFilter] = useState([]);

  const [battery, setbattery] = useState([]);
  const [BatteryFilter, setBatteryFilter] = useState([]);

  const [Discount, setDiscount] = useState([]);
  const [DiscountFilter, setDiscountFilter] = useState([]);

  const [Primary, setPrimary] = useState([]);
  const [primaryFilter, setPrimaryFilter] = useState([]);

  const [Secondary, setSecondary] = useState([]);
  const [SecondaryFilter, setSecondaryFilter] = useState([]);

  const [rating, setrating] = useState([]);
  const [ratingFilter, setratingFilter] = useState([]);


 const [priceFilterOptions, setpriceFilterOptions] = useState([]);
const [priceFilter, setpriceFilter] = useState([]);

  useEffect(() => {
    fetch("/Apple.json")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);

        const uniqueRam = [...new Set(data.map((p) => p.RAMcheck))];
        const uniqueBrand = [...new Set(data.map((p) => p.brand))];

        setRam(uniqueRam);
        setBrand(uniqueBrand);

        setinternal([
          { label: "128 - 255.9 GB", min: 128, max: 255.9 },
          { label: "256 GB & Above", min: 256, max: Infinity },
          { label: "64 - 127.9 GB", min: 64, max: 127.9 },
        ]);

        setSreen([
          { label: "6 - 6.3 inch", min: 6, max: 6.3 },
          { label: "6.4 inch & Above", min: 6.4, max: Infinity },
        ]);

        setbattery([
          { label: "5000 - 5999 mAh", min: 5000, max: 5999 },
          { label: "5000 mAh Above", min: 5000, max: Infinity },
          { label: "4000 - 4999 mAh", min: 4000, max: 4999 },
        ]);

        setDiscount([
          { label: "10% or more", min: 10, max: Infinity },
          { label: "20% or more", min: 20, max: Infinity },
          { label: "30% or more", min: 30, max: Infinity },
        ]);

        setPrimary([
          { label: "12 - 15.9 MP", min: 12, max: 15.9 },
          { label: "48 - 63.9 MP", min: 48, max: 63.9 },
        ]);

        setSecondary([
          { label: "12 - 15.9 MP", min: 12, max: 15.9 },
          { label: "5 - 7.9 MP", min: 5, max: 7.9 },
        ]);

        setrating([
          { label: "4★ & above", min: 4, max: Infinity },
          { label: "5★ & above", min: 5, max: Infinity },
        ]);
       setpriceFilterOptions([
  { label: "Below ₹20,000", min: 0, max: 20000 },
  { label: "₹20,000 – ₹40,000", min: 20000, max: 40000 },
  { label: "₹40,000 – ₹60,000", min: 40000, max: 60000 },
  { label: "₹60,000 & above", min: 60000, max: Infinity },
]);


      });
  }, []);


  useEffect(() => {
    if (products.length > 0) {
      applyFilters();
    }
  }, [products, RamFilter, BrandFilter,internalFilter,ScreenFilter,BatteryFilter,DiscountFilter,primaryFilter,SecondaryFilter,ratingFilter,priceFilter]);

const applyFilters = () => {
  if (!products || products.length === 0) return;

  let result = [...products]; 

  result = result.filter((p) => {            
    const ramMatch = RamFilter.length === 0 || RamFilter.includes(p.RAMcheck);

    const internalMatch =
      internalFilter.length === 0 ||
      internalFilter.some(
        (range) =>
          parseFloat(p.Internalcheck) >= range.min &&
          parseFloat(p.Internalcheck) <= range.max
      );

    const brandMatch =
      BrandFilter.length === 0 || BrandFilter.includes(p.brand);

    const screenMatch =
      ScreenFilter.length === 0 ||
      ScreenFilter.some(                        
        (range) =>
          parseFloat(p.Screensize) >= range.min &&
          parseFloat(p.Screensize) <= range.max
      );

    const batteryMatch =
      BatteryFilter.length === 0 ||
      BatteryFilter.some(                                                                                
        (range) =>                                         
          parseFloat(p.batterycheck) >= range.min &&
          parseFloat(p.batterycheck) <= range.max
      );

    const discountMatch =
      DiscountFilter.length === 0 ||
      DiscountFilter.some(
        (range) =>
          parseFloat(p.discount) >= range.min &&
          parseFloat(p.discount) <= range.max
      );

    const primaryMatch =                   
      primaryFilter.length === 0 ||
      primaryFilter.some(
        (range) =>
          parseFloat(p.primary) >= range.min &&
          parseFloat(p.primary) <= range.max
      );

    const secondaryMatch =
      SecondaryFilter.length === 0 ||
      SecondaryFilter.some(
        (range) =>
          parseFloat(p.secondary) >= range.min &&
          parseFloat(p.secondary) <= range.max
      );

  
    const ratingValue = parseFloat(p.green); 
    const ratingMatch =
      ratingFilter.length === 0 ||
      ratingFilter.some(
        (range) => ratingValue >= range.min && ratingValue <= range.max
      );

      const priceValue = parseInt(p.price.replace(/₹|,/g, ""), 10);
const priceMatch =
  priceFilter.length === 0 ||
  priceFilter.some(
    (range) => priceValue >= range.min && priceValue <= range.max
  );


    
    // const price = parseInt(p.price.replace(/₹|,/g, ""), 10);
    // const priceMatch = price >= priceFilter.min && price <= priceFilter.max;

    
    return (
      ramMatch &&
      internalMatch &&
      brandMatch &&
      screenMatch &&
      batteryMatch &&
      discountMatch &&
      primaryMatch &&
      secondaryMatch &&
      ratingMatch &&
      priceMatch
    );
  });

  console.log("Filtered Products:", result);
  setFilteredProducts(result);
};


  return (
    <FilterContext.Provider
      value={{
        products,
        filteredProducts,
        Ram,
        RamFilter,
        setRamFilter,
        internal,
        internalFilter,
        setInternalFilter,
        Brand,
        BrandFilter,
        setBrandFilter,
        Screen,
        ScreenFilter,
        setScreenFilter,
        battery,
        BatteryFilter,
        setBatteryFilter,
        Discount,
        DiscountFilter,
        setDiscountFilter,
        Primary,
        primaryFilter,
        setPrimaryFilter,
        Secondary,
        SecondaryFilter,
        setSecondaryFilter,
        rating,
        ratingFilter,
        setratingFilter,
        priceFilter,
        setpriceFilter,
        applyFilters,
         setFilteredProducts,
         priceFilterOptions,
priceFilter,
setpriceFilter,

      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

      


 


                                                                                                                                                                                                                                                                                                                                                                                                                

 

                                            

       

                                                                     

           

  


                    


          
      




                    

                 



                                                                                         
                                                                                                                                                                                                                                                                                                                                                      