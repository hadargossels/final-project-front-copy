import {Route ,  Redirect  } from "react-router-dom";
 import { useState } from 'react'
// import  auth from "./auth";
import {auth} from '../../firebase'
export const ProtectRouter =  ({component : Component ,...rest}) =>{
    const [isAuth,setIsAuth] =  useState(false)

    // function myFunction(){
    //     auth.onAuthStateChanged((user) => {
    //         if(user)
    //             setIsAuth(true)
    //     })
    // }


    return (
        <Route
        {...rest}
            render={props=>
                // <Redirect to={{pathname:'/', state:{from:props.location}}} />
                {
                    if(isAuth){
                        return (<Component {...rest} {...props} />)
                    }else{
                        return ( <Redirect to ={ {pathname: "/" , state : {from : props.location}}} />)
                    }
                }
        }
    
    
        />
    )

} 