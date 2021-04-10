import React, { useContext, useState, useEffect} from 'react';
import axios from 'axios';

const CategoriesContext = React.createContext();

export function useCategories() {
    return useContext(CategoriesContext);
}

export function CategoriesProvider({children}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => { 
        axios.get(`${process.env.REACT_APP_PROXY}/categories`)
        .then(res => {
            setCategories(res.data);
        })
    }, []);

    const value = {
        categories,
        useCategories
    };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}
