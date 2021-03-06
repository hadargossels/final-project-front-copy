import React,{useContext,useState,useEffect} from 'react'
import {auth,db} from '../firebase'

const AuthShopContext=React.createContext()


export function useAuth(){
    return useContext(AuthShopContext)
}


export function AuthShopProvider({children}) {
    const [currentUser,setCurrentUser]=useState()
    const [cart,setCart]=useState([])
    const [products,setProducts]=useState([])
    const [users,setUsers]=useState([])
    const [orders,setOrders]=useState([])
    const [url,setUrl]=useState()

    useEffect(()=>{
       
        db.ref('products').on('value', (snapshot)=>{
            if(snapshot.val()!=null){
            let arrProducts = []
            for (let obj in snapshot.val()) {
                arrProducts.push(snapshot.val()[obj])
            }
            setProducts(arrProducts)
        }})
        

        db.ref('users').on('value', (snapshot)=>{
            if(snapshot.val()!=null){
            let arrUsers = []
            for (let obj in snapshot.val()) {
                arrUsers.push(snapshot.val()[obj])
            }
            setUsers(arrUsers)
        }})

        db.ref('orders').on('value', (snapshot)=>{
            if(snapshot.val()!=null){
            let arrOrders = []
            for (let obj in snapshot.val()) {
                arrOrders.push(snapshot.val()[obj])
            }
            setOrders(arrOrders)
        }})

        auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
           
        }) 
        setCart(JSON.parse(localStorage.getItem('products'))||[])
        setUrl(window.location.href)
    },[])
 



    const value={   
        currentUser,
        cart,
        products,
        users,
        url,
        orders
    } 

    return (
        <AuthShopContext.Provider value={value}>
            {children}
        </AuthShopContext.Provider>
    )
}
