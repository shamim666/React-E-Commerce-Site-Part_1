import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props 
        
    let total = 0 ;
    let totalQuantity = 0; 
    for( const product of cart){
        product.quantity = !product.quantity ? 1 : product.quantity 
        
        total = total + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity
    }

    const shipping  =  total > 0 ? 15 : 0 ;
    const tax = (total + shipping) * .15
    const grandTotal = shipping + tax + total 
    return (
        <div>
                <h2>Order Summary </h2>
                <h5>Items Ordered:{totalQuantity} </h5>
                <p>Total: {total.toFixed(2)}</p>
                <p> Shipping : {shipping}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;