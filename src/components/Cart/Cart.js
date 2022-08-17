import React from 'react';

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total +  product.price * quantity;
        shipping = shipping + product.shipping * quantity;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total price: {total} </p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;