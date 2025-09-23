import React from "react";
import "./Flip2.css"
function Filter2({ Ram, setRamFilter, internal, setInternalFilter, Brand, setBrandFilter, Screen, setScreenFilter, battery, setBatteryFilter, Discount, setDiscountFilter, Primary, setPrimaryFilter, Secondary, setSecondaryFilter, rating, setratingFilter }) {
    const toggleSelection = (value, setFilter) => {
        setFilter((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        )
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
                    {/* RAM */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">RAM</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>

                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Ram.map((c, i) => {
                                            if (!c) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(c, setRamFilter)} />
                                                    <div className="each2">{c}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* INTERNAL STORAGE */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">INTERNAL STORAGE</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {internal.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(range, setInternalFilter)} />
                                                    <div className="each2">{range.label}</div>

                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BRAND */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">BRAND</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Brand.map((b, i) => {
                                            if (!b) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(b, setBrandFilter)} />
                                                    <div className="each2">{b}</div>

                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SCREEN SIZE */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">SCREEN SIZE</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>

                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Screen.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(range, setScreenFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BATTERY CAPACITY */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">BATTERY CAPACITY</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>

                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {battery.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(range, setBatteryFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DISCOUNT  */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">DISCOUNT</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>

                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Discount.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(range, setDiscountFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PRIMARY CAMERA */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">PRIMARY CAMERA</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>

                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Primary.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(range, setPrimaryFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECONDARY CAMERA */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">SECONDARY CAMERA</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {Secondary.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(range, setSecondaryFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CUSTOMER RATINGS */}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">CUSTOMER RATING</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>
                        <div className="options-main">
                            <div className="option-main2">
                                <div className="option-main3">
                                    <div className="option-main4">
                                        {rating.map((range, i) => {
                                            if (!range) return null;
                                            return (
                                                <label key={i}> <input type="checkbox" onChange={() => toggleSelection(range, setratingFilter)} />
                                                    <div className="each2">{range.label}</div>
                                                </label>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PRICE*/}
                    <div className="ram-container2">
                        <div className="ram-container3">
                            <div className="ram-main">PRICE</div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP rZzKt4"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
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
                                <select className="min-select" >
                                    <option className="op" value="min">Min</option>
                                    <option className="op" value="10000">₹10000</option>
                                    <option className="op" value="15000">₹15000</option>
                                    <option className="op" value="20000">₹20000</option>
                                    <option className="op" value="30000">₹30000</option>
                                </select>
                            </div>
                            <div className="to">to</div>
                            <div className="max-container">
                                <select className="max-select">
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
































