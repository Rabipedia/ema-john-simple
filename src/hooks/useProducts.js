import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [prducts, setProducts] = useState([]);
    useEffect( () => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return [prducts, setProducts];
}

export default useProducts;