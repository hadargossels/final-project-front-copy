import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {auth} from '../firebase'
// import firebase from 'firebase/app'
// import Auth from '../../Auth'

export default function ProtectedRoute({component:Component,...rest}) {
 
    return(
        <Route {...rest} render={(props)=>{ 
        return auth.currentUser
        ?<Component {...props}/>
        :<Redirect to="/login" />
        }}/>
      )
}
