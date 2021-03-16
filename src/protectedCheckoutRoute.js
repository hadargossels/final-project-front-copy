import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import CurrAuth from './auth';

export const ProtectedCCheckoutRoute = ({component: Component, isUserSignedIn , addToOrder, ...rest}) => {
    let isSigned = localStorage.getItem('signIn')
    return (
        <Route {...rest} render={(props) => {
            if(CurrAuth.isAuthenticated() || isSigned === "true") {
                return <Component {...props} isUserSignedIn={isUserSignedIn} addToOrder={addToOrder}/>
            } else {
                return <Redirect to={
                    {
                        pathname: "/checkout",
                        state: {
                            from: props.location
                        }
                    }
                }/>
            }
        }}/>
    )
}