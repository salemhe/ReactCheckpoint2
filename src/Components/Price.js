import React from "react";
import { product } from "./Product"; 

const Price = () => {
    return(
        <div className="Price">
            Price: ${product.price}
        </div>
    );
}

export default Price;