import React,{useEffect, useState} from "react";
import useFetch from "./useFetch";
import Loader from "./Loader";
import Product from "./Product";

const FETCHURL = "https://react-tutorial-demo.firebaseio.com/";
const ENDPOINT = "supermarket.json";
// It is from React Tutorial Page;  

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const {get, isLoading} = useFetch(FETCHURL);
  useEffect(()=>{
    get(ENDPOINT)
    .then(data => {
      return setProducts(data);
    })
    .then(error => console.error(error))
  },[]);


  return (
  <div class="products-layout">
    <h1>Products</h1>
    <p>Take a look at our products</p>
    {isLoading && <Loader />}
    <div class="products-grid">
    {products.map(product => <Product 
      key={product.id}
      details={product} />)}
    </div>
</div>);
}