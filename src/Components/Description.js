import React from "react";
import { product } from "./Product"; 

const Description = () => {
    return(
        <div className="Description">
            {product.description}
        </div>
    );
}

export default Description;