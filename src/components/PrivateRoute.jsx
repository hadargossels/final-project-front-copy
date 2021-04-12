import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useAuth} from '../AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
    // const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const currentUser = localStorage.getItem("currentUser")
    return (
        <Route {...rest}
        render={props => {
            if (currentUser) {
                return <Component {...props}/>
            }
            else {
                return <Redirect to="/login"/>
            }
        //    return currentUser ? <Component {...props}/> : <Redirect to="/login"/>
        }}>
            
        </Route>
    )
}
