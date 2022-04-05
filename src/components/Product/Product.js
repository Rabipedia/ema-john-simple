import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    //console.log(props.product);
    const {name, img, price, seller, stock} = props.product;
    //const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <p><small>By: {seller}</small></p>
                <h3>${price}</h3>
                <p><small>Only {stock} left in stock - order soon.</small></p>
                <button 
                    onClick={()=>{props.addToCart(props.product)}}
                    className='btn-regular'><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;