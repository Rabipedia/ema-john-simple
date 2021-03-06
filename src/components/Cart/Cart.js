import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart) {
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Item Ordered: {totalQuantity}</h5>
            <p>Total: {total}</p>
            <p><small>Shipping: {shipping}</small></p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;