import React,{useContext} from "react";
import {AppContext} from "./AppContext";



export default function Cart() {
  const value = useContext(AppContext);
  const cart = value.cart;
  const totalPrice = value.totalPrice;
  
  
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
  </div>;
}