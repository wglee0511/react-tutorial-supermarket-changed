import React,{useContext} from "react";
import Button from "./Button";
import {AppContext} from "./AppContext";

export default function ProductDetailInfo(props) {
    const {product} = props;
    const value = useContext(AppContext)
    return <p>
        {product.description} sold at 
        <strong>${product.price}</strong>
        per piece.
        <Button onClick={()=>value.handleProductAdd(product)}>${product.price}</Button>
    </p>
}