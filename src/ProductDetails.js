import React,{useEffect, useState} from "react";
import {useParams, NavLink, useRouteMatch, Switch, Route} from "react-router-dom";
import useFetch from "./useFetch";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailNutrition from "./ProductDetailNutrition";
import ProductDetailStorage from "./ProductDetailStorage";
import Loader from "./Loader";

/*
Base URL: https://react-tutorial-demo.firebaseio.com/
Verb: GET
Endpoint: productinfo/id:id.json

*/
const BSURL = "https://react-tutorial-demo.firebaseio.com/";

export default function ProductDetails (props) {
    const [productDetails, setProductDetails] = useState({});
    const params = useParams();
    const match = useRouteMatch();
    const ENDPOINT = `productinfo/id${params.id}.json`

    const {get, isLoading} =useFetch(BSURL);

    useEffect(()=>{
        get(ENDPOINT)
        .then(data => setProductDetails(data))
        .catch(error => console.error(error));
    },[]);


    return <div className="product-details-layout">
        <div>
            <h2>{productDetails.name}</h2>
            <img 
            src={productDetails.image} 
            width="125" 
            height="125" 
            className="product-details-image"
            alt={productDetails.name}
            />
        </div>
        <div>
            <div className="tabs">
                <ul>
                    <li>
                        <NavLink exact to={match.url} activeClassName="tab-active" >Details</NavLink>
                    </li>
                    <li>
                        <NavLink exact to={`${match.url}/nutrition`} activeClassName="tab-active" >Nutirition</NavLink>
                    </li>
                    <li>
                        <NavLink exact to={`${match.url}/storage`} activeClassName="tab-active" >Storage</NavLink>
                    </li>

                </ul>
        {isLoading && <Loader />}
       <Switch>
            <Route exact path={match.path}>
                <ProductDetailInfo product={productDetails} />
            </Route>
            <Route exact path={`${match.path}/nutrition`}>
                <ProductDetailNutrition nutrition={productDetails.nutrition} />
            </Route>
            <Route exact path={`${match.path}/storage`}>
                <ProductDetailStorage storage={productDetails.storage} />
            </Route>

       </Switch>
            </div>

        </div>


    </div>;
}