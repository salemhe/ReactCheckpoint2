import React from "react";

//imorting product object
import { product } from "./Product"; 

const Image = () => {
    return(
        <div className="Image">
            <img src={product.image} alt="" style={{width: '15rem'}}/>
        </div>
    );
}

export default Image;