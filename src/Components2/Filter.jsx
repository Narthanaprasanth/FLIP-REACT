import React,{useState} from "react";
import "./Flip2.css"
function Filter(){
    const [active, setActive] = useState(null);

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
    return <div className="filter-section2">
        <div className="filter-section3">
            <div className="filter-section4">
                <div className="arrow-filter">
                    <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
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
                        onClick={() => setActive(index)}
                        style={{
                          cursor: "pointer",
                          color: active === index ? "blue" : "black",
                          backgroundColor:
                            active === index ? "white" : "transparent",
                          paddingTop:"12px",
                          paddingBottom:"12px",
                          paddingRight:"8px",
                          paddingLeft:"16px",
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
        </div>
      </div>
    </div>
        
    </div>
}
export default Filter    

 
 

                                                    