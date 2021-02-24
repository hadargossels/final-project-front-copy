import {Route,BrowserRouter as  Redirect  } from "react-router-dom";
// import  auth from "./auth";
import {auth} from '../../firebase'
export const ProtectRouter = props => ({component : Component ,...rest}) =>{
    return (
        <Route
        {...rest}
            render={props=>{
                auth.onAuthStateChanged(user=> {
                    if (user) {
                        console.log("hey");
                        return <Component {...props} />
                    }
                    else{
                        console.log("hey not");
                        return <Redirect to ={ {pathname: "/" , state : {from : props.location}}} />
                    }
                });

        }}
        />
    )
} 