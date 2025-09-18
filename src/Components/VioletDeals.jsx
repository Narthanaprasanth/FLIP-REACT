import React, { useEffect, useState } from "react";

const VioletDeal = ({ dataSource }) => {
    const [images, setimages] = useState([])

    useEffect(() => {
        fetch(dataSource)
            .then((response) => response.json())
            .then((data) => setimages(data))
            .catch((error) => console.error("Error Fetching Images:", error))
    }, [dataSource])
    return (
        <div className="images-container">
            <div className="images-deal">
                {images.slice(0, 3).map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt="" />
                ))}
            </div>

        </div>
    )
}
export default VioletDeal
  

