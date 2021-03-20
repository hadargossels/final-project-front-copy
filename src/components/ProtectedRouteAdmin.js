import React,{useState,useEffect} from 'react'
import {Route,Redirect} from 'react-router-dom'
// import {auth,db} from '../firebase'
import {useAuth} from '../context/AuthShopContext'
// import firebase from 'firebase/app'
// import Auth from '../../Auth'

export default function ProtectedRoute({component:Component,...rest}) {
  const {currentUser}=useAuth()
  const [userNow,setUserNow]=useState([])
  const {users}=useAuth()
  useEffect(()=>{

    if(currentUser){
        for (let i=0;i<users.length;i++) {
            if(users[i].email===currentUser.email)
                setUserNow(users[i])
        }
    }

},[currentUser,users])


    return(
        <Route {...rest} render={(props)=>{ 
        return userNow.role==='Admin'
        ?<Component {...props}/>
        :<Redirect to="/login" />
        }}/>
      )
}
