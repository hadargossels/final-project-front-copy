import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import CurrAuth from './auth';

export const ProtectedRoute = ({component: Component, isUserSignedIn , curUserName , ...rest}) => {
    let isSigned = localStorage.getItem('signIn')
    return (
        <Route {...rest} render={(props) => {
            if(CurrAuth.isAuthenticated() || isSigned === "true") {
                return <Component {...props} isUserSignedIn={isUserSignedIn} curUserName={curUserName}/>
            } else {
                return <Redirect to={
                    {
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    }
                }/>
            }
        }}/>
    )
}