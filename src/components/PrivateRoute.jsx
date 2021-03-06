import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useAuth} from '../AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth()
    return (
        <Route {...rest}
        render={props => {
            if (currentUser.email === 'admin@admin.com') {
                return <Redirect to="/admin"/>
            }
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
