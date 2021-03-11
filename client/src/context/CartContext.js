import React, { useContext, useState, useEffect} from 'react';

const CartContext = React.createContext();

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [displayAlert, setDisplayAlert] = useState(false);
    const tax = 0.17;

    useEffect(() => {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
        if (cartProducts !== null) {
            setCartProducts(cartProducts)
        }
    
        const favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts'));
        if (favoriteProducts !== null) {
            setFavoriteProducts(favoriteProducts)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    },[cartProducts])

    useEffect(() => {
        localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
    },[favoriteProducts])

    const handleAddToCart = (product, qty) => {
        setDisplayAlert(true);
        setTimeout(() => {
            setDisplayAlert(false);
        }, 5000);
    
        const updatedCartProducts = [...cartProducts];
    
        const productsFound = cartProducts.filter(element => element.id === product.id)
        if (productsFound.length > 0){
            updatedCartProducts.forEach((element) => {
            if(element.id === product.id)
              element.quantity = parseInt(element.quantity) + parseInt(qty);
          })
        }
        else{
            updatedCartProducts.push({...product, quantity: qty});
        }
        
        setCartProducts(updatedCartProducts);
    }

    const handleChangeFavorites = (product, toFavorate) => {
        const updatedFavoriteProducts = [...favoriteProducts];
        if (toFavorate){
            updatedFavoriteProducts.push(product);
        }
        else{
            updatedFavoriteProducts = updatedFavoriteProducts.filter(element => element.id !== product.id)
        }
        
        setFavoriteProducts(updatedFavoriteProducts)
    }

    const handleQtyChange = (product, qty) => {
        const updatedCartProducts = [...cartProducts];
        updatedCartProducts.forEach(element => {
          if(element.id === product.id)
            element.quantity = parseInt(qty);
        });
        setCartProducts(updatedCartProducts);
    }

    const handleDeleteCartProduct = (product) => {
        const updatedCartProducts = [...cartProducts];
        updatedCartProducts = updatedCartProducts.filter(element => element.id !== product.id);
        setCartProducts(updatedCartProducts);
    }

    const calculateSumQtyCart = () => {
        return cartProducts.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.quantity), 0)
    }

    const getSubTotalAmount = () => {
        const totalAmount = cartProducts.reduce((accumulator, currentValue) => 
        accumulator + (currentValue.price * (1-currentValue.discount) * currentValue.quantity), 0);
        return totalAmount;
    }

    const value = {
        cartProducts,
        favoriteProducts,
        displayAlert,
        tax,
        handleAddToCart,
        handleChangeFavorites,
        handleQtyChange,
        handleDeleteCartProduct,
        calculateSumQtyCart,
        getSubTotalAmount,
        setDisplayAlert
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
