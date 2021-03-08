import React from "react";
import Button from "./Button";

export default function ProductDetailInfo(props) {
    const {product} = props;
    return <p>
        {product.description} sold at 
        <strong>${product.price}</strong>
        per piece.
        <Button>${product.price}</Button>
    </p>
}