import React, { useContext, useState, useEffect} from 'react';
import axios from 'axios';

const ProductsContext = React.createContext();

export function useProducts() {
    return useContext(ProductsContext)
}

export function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_PROXY}/products`)
        .then(res => {
            setProducts(res.data);
        })
    }, [])


    const value = {
        products,
        setProducts
    }

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}
