import React from "react";
import Button from "./Button";

export default function Product (props) {
    const {details} = props;


    
    return (
        <div className="product">
            <div className="product-image-container">
                <img
                src={details.image}
                className="product-image" 
                width="100" height="100" alt={details.name} />
                <div className="product-quantity-container" >
                    <div className="product-quantity">0</div>
                </div>
            </div>

            <div className="product-info" >
                <h3>{details.name}</h3>
                <p>{details.description}</p>
            </div>
            <div className="product-checkout">
                <div>
                    <Button className="product-delete">  x</Button>
                </div>
            </div>

        </div>
    )
}