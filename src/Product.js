import React,{useContext} from "react";
import Button from "./Button";
import {Link} from "react-router-dom";
import {AppContext} from "./AppContext";

export default function Product (props) {
    const {details} = props;
    const value = useContext(AppContext);

    
    return (
        <div className="product">
            <Link to={`/products/${details.id}`} >
            <div className="product-image-container">
                <img
                src={details.image}
                className="product-image" 
                width="100" height="100" alt={details.name} />
                <div className="product-quantity-container" >
                    <div className="product-quantity">0</div>
                </div>
            </div>
            </Link>

            <div className="product-info" >
                <h3>{details.name}</h3>
                <p>{details.description}</p>
            </div>
            <div className="product-checkout">
                <div>
                    <Button className="product-delete" onClick={()=>value.handleProductDelete(details.id)} >x</Button>
                </div>
                <Button outline onClick={()=> value.handleProductAdd(details)}>${details.price}</Button>
            </div>

        </div>
    )
}