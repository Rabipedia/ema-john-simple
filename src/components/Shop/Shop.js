import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setdisplayProducts] = useState([]);
    useEffect(() =>{
        fetch('./products.JSON')
          .then(res => res.json())
          .then(data => {
              setProducts(data);
              setdisplayProducts(data)
          });
    }, []);

    useEffect(() =>{
        const savedCart = getStoredCart();
        if(products.length) {
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find( product => product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addToCart);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setdisplayProducts(matchProducts);
        console.log(matchProducts.length);
    }
    return (
        <>
            <div className="search-container">
                <input 
                    type="text"
                    onChange={handleSearch}
                    placeholder='search product'/>
            </div>
            <div className='shop-container'>
            <div className="prduct-container">
                <h3>Products:{products.length} </h3>
                {
                    displayProducts.map(product => <Product
                        key={product.key}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            </div>
        </>
        
    );
};

export default Shop;