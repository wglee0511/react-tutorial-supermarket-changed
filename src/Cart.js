import React,{useContext, useState} from "react";
import {AppContext} from "./AppContext";
import {loadStripe} from '@stripe/stripe-js';
import {STRIPE_KEY} from "./KEYS";
import Button from "./Button";
import Input from "./Input";


export default function Cart() {
  const [email, setEmail] = useState("");
  const value = useContext(AppContext);
  const cart = value.cart;
  const totalPrice = value.totalPrice;
  const stripePromise = loadStripe(STRIPE_KEY);

  const lineItems = cart.map(item => {
    return {
      price: item.price_id,
      quantity: item.quantity
    }
  });
  
  // Need new api
  const handleSubmit = (event) => {
    event.preventDefault();
    stripePromise.then(stripe=> stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: "https://ace131c0-061a-4b2d-a24d-9438652564c0-3000.apps.codespaces.githubusercontent.com/",
      cancelUrl: "https://ace131c0-061a-4b2d-a24d-9438652564c0-3000.apps.codespaces.githubusercontent.com/#/cart",
      customerEmail: email
    })).then((response) => {
      console.log(response.error);
    }).catch(error=> console.error(error));
    
  }
  
  return <div class="cart-layout">
    <div>
      <h1>Your Cart</h1>
      {cart.length ===0 && <p>You have not added any product to your cart yet.</p>}
      {cart.length > 0 && 
      <table className="table table-cart">
        <thead>
          <tr>
            <th width="25%" className="th-product">Product</th>
            <th width="20%">Unit price</th>
            <th width="10%">Quantity</th>
            <th width="25%">Total</th>
          </tr>
        </thead>

        <tbody>
         {cart.map(item => {
          return <tr key={item.id}>
            <td><img src={item.image} width="30" height="30" alt={item.name} />{item.name}</td>
            <td>$ {item.price}</td>
            <td>{item.quantity}</td>
            <td>$ {item.price*item.quantity}</td>
          </tr>

         })}
        </tbody>

        <tfoot>
          <tr>
            <th colSpan="2"></th>
            <th className="cart-highlight">Total</th>
            <th className="cart-highlight">$ {totalPrice}</th>
          </tr>
        </tfoot>

      </table>
      }
    </div>
    {cart.length > 0 && <form className="pay-form" onSubmit={handleSubmit}>
      <p>Enter your email and then click on pay and your products will be
    delivered to you on the same day!</p>
    <Input onChange={(event)=> setEmail(event.target.value)} autoComplete="email" placeholder="Email" type="email" />
    <Button type="submit">Pay</Button>
    </form>}


  </div>;
}