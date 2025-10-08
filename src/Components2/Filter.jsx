// src/Components2/Filter.jsx
import React, { useState, useContext } from "react";
import { FilterContext } from "./FilterContext";
import Product2 from "./Product2";
import search from "./image2/search.png"
import { useNavigate } from "react-router-dom";

function Filter() {
  const { applyFilters } = useContext(FilterContext);

  const {
    filteredProducts,
    Ram,
    RamFilter,
    setRamFilter,
    Brand,
    BrandFilter,
    setBrandFilter,
    internalFilter,
    setInternalFilter,
    internal,
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
    priceFilterOptions,
    priceFilter,
    setpriceFilter,

  } = useContext(FilterContext);

  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [showRam, setShowRam] = useState(null)
  const [showbrand, setshowbrand] = useState(true)
  const [showinternal, setinternal] = useState(null)
  const [showscreen, setscreen] = useState(null)
  const [showbattery, setbattery] = useState(null)
  const [showdiscount, setdiscount] = useState(null)
  const [showprimary, setprimary] = useState(null)
  const [showsecondary, setsecondary] = useState(null)
  const [showrating, setrating] = useState(null)
  const [showPrice, setShowPrice] = useState(null);


  const filters = [
    "Brand",
    "RAM",
    "Internal Storage",
    "Screen Size",
    "Battery Capacity",
    "Discount",
    "Primary Camera",
    "Secondary Camera",
    "Customer Rating",
    "Price",
  ];
  const hanldefilter = (item, index) => {
    setActive(index)
    setShowRam(item === "RAM")
    setshowbrand(item === "Brand")
    setinternal(item === "Internal Storage")
    setscreen(item === "Screen Size")
    setbattery(item === "Battery Capacity")
    setdiscount(item === "Discount")
    setprimary(item === "Primary Camera")
    setsecondary(item === "Secondary Camera")
    setrating(item === "Customer Rating")
    setShowPrice(item === "Price");



  }
  return (
    <>
      <div className="filter-section3">
        <div className="filter-section4">
          <div className="arrow-filter">
            <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http:www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
          </div>
          <div className="filter-heading">
            <div className="filter-heading3">
              <div className="filter-name"> <h2>Filters</h2></div>
              <div className="clear-filters">Clear Filters</div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-both1">
        <div className="filter-both2">
          <div className="filter-both3">
            <div className="filter-left1">
              <div className="filter-left2">
                <div className="filter-left3">
                  <div className="filter-left4">
                    {filters.map((item, index) => (
                      <div className="brand-filter2" key={index}>
                        <div
                          className="brand-filternew"
                          onClick={() => hanldefilter(item, index)}
                          style={{
                            cursor: "pointer",
                            color: active === index ? "blue" : "black",
                            backgroundColor:
                              active === index ? "white" : "transparent",
                            paddingTop: "12px",
                            paddingBottom: "12px",
                            paddingRight: "8px",
                            paddingLeft: "16px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>{item}</span>
                          <p></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-right1">
              <div className="filter-right2">
                {active === filters.indexOf("Brand") && (
                  <div className="filter-search2">
                    <div className="filter-sign2">
                      <img src={search} alt="" />
                    </div>
                    <input type="text" placeholder="Search Brand" />
                  </div>
                )}



                {showRam && (
                  <div className="ram-option">
                    {Ram.map((r, i) => {
                      if (!r) return null;

                      const isChecked = RamFilter.includes(r);

                      const handleRamChange = () => {

                        setRamFilter((prev) => {
                          if (prev.includes(r)) {
                            return prev.filter((item) => item !== r)
                          } else {
                            return [...prev, r]
                          }
                        })

                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleRamChange}
                          />
                          <div className="ram-innerfilter">{r}</div>
                        </label>
                      );
                    })}
                  </div>
                )}

                {showbrand && (
                  <div className="ram-option">
                    {Brand.map((b, i) => {
                      if (!b) return null;

                      const isChecked = BrandFilter.includes(b);

                      const handlebrandchange = () => {
                        let updated;
                        if (isChecked) {
                          updated = BrandFilter.filter((item) => item !== b);
                        } else {
                          updated = [...BrandFilter, b];
                        }
                        setBrandFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handlebrandchange}

                          />
                          <div className="ram-innerfilter">{b}</div>
                        </label>
                      );
                    })}
                  </div>
                )}
                {showinternal && (
                  <div className="ram-option">
                    {internal.map((range, i) => {
                      if (!range) return null;

                      const isChecked = internalFilter.includes(range);

                      const handleinternalchange = () => {
                        let updated;
                        if (isChecked) {
                          updated = internalFilter.filter((item) => item !== range);
                        } else {
                          updated = [...internalFilter, range];
                        }
                        setInternalFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleinternalchange}

                          />
                          <div className="ram-innerfilter">{range.label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}
                {showscreen && (
                  <div className="ram-option">
                    {Screen.map((range, i) => {
                      if (!range) return null;

                      const isChecked = ScreenFilter.includes(range);

                      const handlescreenchange = () => {
                        let updated;
                        if (isChecked) {
                          updated = ScreenFilter.filter((item) => item !== range);
                        } else {
                          updated = [...ScreenFilter, range];
                        }
                        setScreenFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handlescreenchange}

                          />
                          <div className="ram-innerfilter">{range.label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}

                {showbattery && (
                  <div className="ram-option">
                    {battery.map((range, i) => {
                      if (!range) return null;

                      const isChecked = BatteryFilter.includes(range);

                      const handlebatterychange = () => {
                        let updated;
                        if (isChecked) {
                          updated = BatteryFilter.filter((item) => item !== range);
                        } else {
                          updated = [...BatteryFilter, range];
                        }
                        setBatteryFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handlebatterychange}

                          />
                          <div className="ram-innerfilter">{range.label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}

                {showdiscount && (
                  <div className="ram-option">
                    {Discount.map((range, i) => {
                      if (!range) return null;

                      const isChecked = DiscountFilter.includes(range);

                      const handlediscountchange = () => {
                        let updated;
                        if (isChecked) {
                          updated = DiscountFilter.filter((item) => item !== range);
                        } else {
                          updated = [...DiscountFilter, range];
                        }
                        setDiscountFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handlediscountchange}

                          />
                          <div className="ram-innerfilter">{range.label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}

                {showprimary && (
                  <div className="ram-option">
                    {Primary.map((range, i) => {
                      if (!range) return null;

                      const isChecked = primaryFilter.includes(range);

                      const handleprimarychange = () => {
                        let updated;
                        if (isChecked) {
                          updated = primaryFilter.filter((item) => item !== range);
                        } else {
                          updated = [...primaryFilter, range];
                        }
                        setPrimaryFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleprimarychange}

                          />
                          <div className="ram-innerfilter">{range.label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}

                {showsecondary && (
                  <div className="ram-option">
                    {Secondary.map((range, i) => {
                      if (!range) return null;

                      const isChecked = SecondaryFilter.includes(range);

                      const handlesecondarychange = () => {
                        let updated;
                        if (isChecked) {
                          updated = SecondaryFilter.filter((item) => item !== range);
                        } else {
                          updated = [...SecondaryFilter, range];
                        }
                        setSecondaryFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handlesecondarychange}

                          />
                          <div className="ram-innerfilter">{range.label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}

                {showrating && (
                  <div className="ram-option">
                    {rating.map((range, i) => {
                      if (!range) return null;

                      const isChecked = ratingFilter.some((r) => r.label === range.label);

                      const handleratingchange = () => {
                        let updated;
                        if (isChecked) {
                          updated = ratingFilter.filter((item) => item.label !== range.label);
                        } else {
                          updated = [...ratingFilter, range];
                        }
                        setratingFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleratingchange}
                          />
                          <div className="ram-innerfilter">{range.label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}

                {showPrice && (
                  <div className="price-option">
                    {priceFilterOptions.map((range, i) => {
                      if (!range) return null;
                      const isChecked = priceFilter.some((r) => r.label === range.label);

                      const handlePriceChange = () => {
                        let updated;
                        if (isChecked) {
                          updated = priceFilter.filter((item) => item.label !== range.label);
                        } else {
                          updated = [...priceFilter, range];
                        }
                        setpriceFilter(updated);
                      };

                      return (
                        <label className="lab" key={i}>
                          <input
                            className="inp"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handlePriceChange}
                          />
                          <div className="price-innerfilter">{range.label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-apply">
        <div className="bottom-apply1">
          <div className="total-products">
            <div className="total-number">873</div>
            <div className="total2">products found</div>
          </div>
          <div className="apply-box" onClick={() => {
            console.log(applyFilters())
            applyFilters();
            navigate(-1);
          }}><span>Apply</span></div>
        </div>
      </div>
    </>
  );
}


export default Filter;






























