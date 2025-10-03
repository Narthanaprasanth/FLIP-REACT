import React, { useState } from "react";
import "./Flip2.css"
function Filter2({ Ram, setRamFilter, internal, setInternalFilter, Brand, setBrandFilter, Screen, setScreenFilter, battery, setBatteryFilter, Discount, setDiscountFilter, Primary, setPrimaryFilter, Secondary, setSecondaryFilter, rating, setratingFilter, priceFilter, setpriceFilter, RamFilter, internalFilter, BrandFilter, ScreenFilter, BatteryFilter, DiscountFilter, primaryFilter, SecondaryFilter, ratingFilter }) {
    const toggleSelection = (item, setFilter) => {
        setFilter(prev =>
            prev.some(v => v.label === item.label)
                ? prev.filter(v => v.label !== item.label)
                : [...prev, item]
        );
    };

const [showOptions, setShowOptions] = useState(false);
const [showinternal,setinternal]=useState(false)
const [showbrand,setshowbrand]=useState(true)
const [showscreen,setscreen]=useState(false)
const [showbattery,setbattery]=useState(false)
const [showdiscount,setdiscount]=useState(true)
const [showprimary,setprimary]=useState(false)
const [showsecondary,setsecondary]=useState(false)
const [showrating,setrating]=useState(false)

const toggle=(c,setter)=>{
    setter((prev)=>prev.includes(c)?prev.filter((item)=>item!=c):[...prev,c])
}                    
    return (
        <>
            <div className="filter-container2">
                <div className="Filter-inner2">                                  
                    <div className="Filter-container3">                            
                        <div className="Filter-main2">

                            <div className="Filter-txt2">
                                <div className="Filter-txt3">
                                    <div className="Filter-txt4">
                                        <span>Filters</span>                                               
                                    </div>
                                    {(RamFilter.length > 0 ||                                                                    
                                        internalFilter.length > 0 ||
                                        BrandFilter.length > 0 ||
                                        ScreenFilter.length > 0 ||                      
                                        BatteryFilter.length > 0 ||       
                                        DiscountFilter.length > 0 ||                                                            
                                        primaryFilter.length > 0 ||
                                        SecondaryFilter.length > 0 ||
                                        ratingFilter.length > 0) &&
                                        (<div className="clearall2" onClick={() => window.location.reload()}>
                                            <span >CLEAR ALL</span>
                                        </div>
                                        )}
                                </div>
                                <div className="grey-text">
                                    {/* RAM */}
                                    {RamFilter.map((c, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(c, setRamFilter)}>
                                            <div className="cros2" >x</div>
                                            <div className="text-display">{c}</div>
                                        </div>
                                    ))}
                                    {/*INTERNAL  */}
                                    {internalFilter.map((range, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(range, setInternalFilter)}>
                                            <div className="cros2" >x</div>
                                            <div className="text-display">{range.label}</div>
                                        </div>

                                    ))}
                                    {/* Brand */}
                                    {BrandFilter.map((b, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(b, setBrandFilter)}>
                                            <div className="cros2" >x</div>
                                            <div className="text-display">{b}</div>
                                        </div>
                                    ))}
                                    {/* SREEN FILTER */}
                                    {ScreenFilter.map((range, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(range, setScreenFilter)}>
                                            <div className="cros2" >x</div>
                                            <div className="text-display">{range.label}</div>
                                        </div>
                                    ))}
                                    {/* BATTERY CAPACITY */}
                                    {BatteryFilter.map((range, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(range, setBatteryFilter)}>
                                            <div className="cros2" >x</div>
                                            <div className="text-display">{range.label}</div>
                                        </div>
                                    ))}
                                    {/* DISCOUNT */}
                                    {DiscountFilter.map((range, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(range, setDiscountFilter)}>
                                            <div className="cros2">x</div>
                                            <div className="text-display">{range.label}</div>
                                        </div>

                                    ))}
                                    {/* PRIMARY CAMERA */}
                                    {primaryFilter.map((range, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(range, setPrimaryFilter)}>
                                            <div className="cros2" >x</div>
                                            <div className="text-display">{range.label}</div>
                                        </div>
                                    ))}
                                    {/* SECONDARY CAMERA */}
                                    {SecondaryFilter.map((range, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(range, setSecondaryFilter)}>
                                            <div className="cros2" >x</div>
                                            <div className="text-display">{range.label}</div>
                                        </div>
                                    ))}
                                    {/* CUSTOMER RATING */}
                                    {ratingFilter.map((range, i) => (
                                        <div key={i} className="grey-text2" onClick={() => toggleSelection(range, setratingFilter)}>
                                            <div className="cros2" >x</div>
                                            <div className="text-display">{range.label}</div>
                                        </div>
                                    ))}        
                                </div>
                            </div>
                        </div>
                    </div>                                     
                    <div className="Category2-container">
                        <div className="category2">
                            <div className="Categories-text">
                                <span>CATEGORIES</span> 
                            </div>                   
                            <div className="text2">
                                <div className="text3">
                                    <span><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" class="P3pAQJ"></path></svg></span>
                                    <a href="#">Mobiles & Accessories</a>
                                </div>
                            </div>
                            <div className="mobiles2">
                                <div className="mobiles4">
                                    <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class=""></path></svg>
                                    <a href="#">Mobiles</a>
                                </div>
                            </div>
                        </div>  
                    </div>
                    {/*RAM*/}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">RAM</div>
                            <svg  className={`ukzDZP rZzKt4 ${showOptions ? "rotated" : ""}`}width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"onClick={() => setShowOptions(prev => !prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" /></svg>

                        </div>


                    {showOptions && 
                    ( <div className="options-main">
                            {(RamFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setRamFilter([])} ><span>Clear all</span></div>
                                </div>)}

                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Ram.map((c, i) => {
                                            if (!c) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={RamFilter.includes(c)} onChange={() => toggleSelection(c, setRamFilter)} />
                                                    <div className="each2">{c}</div>
                                                </label>)
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}           
                    </div>
                    {/* INTERNAL STORAGE */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">INTERNAL STORAGE</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4" onClick={()=>setinternal((prev)=>!prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        {showinternal && (
                            <div className="options-main">
                            {(internalFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setInternalFilter([])} ><span>Clear all</span></div>
                                </div>)}
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {internal.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={internalFilter.some(r => r.label === range.label)} onChange={() => toggleSelection(range, setInternalFilter)} />
                                                    <div className="each2">{range.label}</div>

                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    {/* BRAND */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">BRAND</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4" onClick={()=>setshowbrand((prev)=>!prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        {showbrand && (
                            <div className="options-main">
                            {(BrandFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setBrandFilter([])} ><span>Clear all</span></div>
                                </div>)}
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Brand.map((b, i) => {
                                            if (!b) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={BrandFilter.includes(b)} onChange={() => toggleSelection(b, setBrandFilter)} />
                                                    <div className="each2">{b}</div>

                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    {/* SCREEN SIZE */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">SCREEN SIZE</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4" onClick={()=>setscreen((prev)=>!prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        {showscreen && (
                            <div className="options-main">
                            {(ScreenFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setScreenFilter([])} ><span>Clear all</span></div>
                                </div>)}
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Screen.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={ScreenFilter.some(s => s.label === range.label)} onChange={() => toggleSelection(range, setScreenFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    {/* BATTERY CAPACITY */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">BATTERY CAPACITY</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4" onClick={()=>setbattery((prev)=>!prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        {showbattery && (
                            <div className="options-main">
                            {(BatteryFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setBatteryFilter([])} ><span>Clear all</span></div>
                                </div>)}
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {battery.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={BatteryFilter.some(b => b.label === range.label)} onChange={() => toggleSelection(range, setBatteryFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    {/* DISCOUNT  */}
                    <div className="ram-container2">

                        <div className="ram-container3">
                            <div className="ram-main">DISCOUNT</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4" onClick={()=>setdiscount((prev)=>!prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        {showdiscount && (
                            <div className="options-main">
                            {(DiscountFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setDiscountFilter([])} ><span>Clear all</span></div>
                                </div>)}
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Discount.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={DiscountFilter.some(d => d.label === range.label)} onChange={() => toggleSelection(range, setDiscountFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    {/* PRIMARY CAMERA */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">PRIMARY CAMERA</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4" onClick={()=>setprimary((prev)=>!prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        {showprimary && (
                            <div className="options-main">
                            {(primaryFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setPrimaryFilter([])} ><span>Clear all</span></div>
                                </div>)}
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Primary.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={primaryFilter.some(p => p.label === range.label)} onChange={() => toggleSelection(range, setPrimaryFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    {/* SECONDARY CAMERA */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">SECONDARY CAMERA</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4" onClick={()=>setsecondary((prev)=>!prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        {showsecondary && (
                            <div className="options-main">
                            {(SecondaryFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setSecondaryFilter([])} ><span>Clear all</span></div>
                                </div>)}
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Secondary.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={SecondaryFilter.some(s => s.label === range.label)} onChange={() => toggleSelection(range, setSecondaryFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        
                    </div>
                    {/*CUSTOMER RATINGS */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">CUSTOMER RATING</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4" onClick={()=>setrating((prev)=>!prev)}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        {showrating && (
                             <div className="options-main">
                            {(ratingFilter.length > 0) &&
                                (<div className="clearall-main">
                                    <div className="cros3">x</div>
                                    <div className="clear-new" onClick={() => setratingFilter([])} ><span>Clear all</span></div>
                                </div>)}
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {rating.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" checked={ratingFilter.some(t => t.label === range.label)} onChange={() => toggleSelection(range, setratingFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                       
                    </div>

                    {/* PRICE*/}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">PRICE</div>
                        </div>
                        <div className="price-range2">
                            <div className="price-range2">
                                <div className="range1"></div>
                                <div className="range1"></div>
                                <div className="range1"></div>
                                <div className="range1"></div>
                                <div className="range1"></div>
                            </div>
                        </div>
                        <div className="trach-container1">
                            <div className="track-container2">

                                <div className="range-circle1">
                                    <div className="circle1"></div>
                                </div>

                                <div className="range-circle2">
                                    <div className="circle2"></div>
                                </div>
                                <div className="track1"></div>
                                <div className="track2"></div>

                            </div>
                            <div className="dot-container2">
                                <div className="dot1">.</div>
                                <div className="dot1">.</div>
                                <div className="dot1">.</div>
                                <div className="dot1">.</div>
                                <div className="dot1">.</div>
                                <div className="dot1">.</div>
                            </div>
                        </div>

                        <div className="price-select2">
                            <div className="min-container">
                                <select className="min-select" value={priceFilter.min} onChange={(e) => setpriceFilter(prev => ({ ...prev, min: e.target.value === "min" ? 0 : parseInt(e.target.value) }))}>
                                    <option className="op" value="min">Min</option>
                                    <option className="op" value="10000">₹10000</option>
                                    <option className="op" value="15000">₹15000</option>
                                    <option className="op" value="20000">₹20000</option>
                                    <option className="op" value="30000">₹30000</option>
                                </select>
                            </div>
                            <div className="to">to</div>
                            <div className="max-container">
                                <select className="max-select" value={priceFilter.max} onChange={(e) => setpriceFilter(prev => ({ ...prev, max: e.target.value === "Max" ? Infinity : parseInt(e.target.value) }))}>
                                    <option className="op" value="10000">₹10000</option>
                                    <option className="op" value="15000">₹15000</option>
                                    <option className="op" value="20000">₹20000</option>
                                    <option className="op" value="30000">₹30000</option>
                                    <option className="op" value="Max">₹30000+</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                          
        </>
    )
}
export default Filter2
 



                       