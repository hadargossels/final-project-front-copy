import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'

const AuthShopContext=React.createContext()



export function useAuth(){
    return useContext(AuthShopContext)
}

export function AuthShopProvider({children}) {
    const [currentUser,setCurrentUser]=useState()
    const [cart,setCart]=useState([])
    const [products,setProducts]=useState([])
    const [orders,setOrders]=useState([])
    const [users,setUsers]=useState([])
    const [url,setUrl]=useState()
    const [details,setDetails]=useState(null)
    let Authorization = `bearer ${JSON.parse(localStorage.getItem("token"))}`

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_PROXY}/current`, {headers: {Authorization}}).then((response)=>{ 
            setCurrentUser(response.data)
        })
        axios.get(`${process.env.REACT_APP_PROXY}/products`).then((response)=>{ 
            setProducts(response.data)
        })
        axios.get(`${process.env.REACT_APP_PROXY}/orders`).then((response)=>{ 
            setOrders(response.data)
        })
        axios.get(`${process.env.REACT_APP_PROXY}/details`).then((response)=>{ 
            setDetails(response.data)
        })
        axios.get(`${process.env.REACT_APP_PROXY}/users`).then((response)=>{ 
            setUsers(response.data)
        })
       
        setCart(JSON.parse(localStorage.getItem('products'))||[])
        setUrl(window.location.href)
    },[Authorization])
 
    const value={   
        currentUser,
        cart,
        products,
        url,
        orders,
        details,
        users
    } 

    return (
        <AuthShopContext.Provider value={value}>
            {children}
        </AuthShopContext.Provider>
    )
}
