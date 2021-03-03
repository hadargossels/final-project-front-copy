import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./auth";



export const Protect = ({ component: Component, ...rest}) => {
  console.log(Auth.isAuthenticated())
  console.log(Auth.getPath())

  return (<Route {...rest} render={props => {
    
    if(Auth.getPath()==="cart"){
      
        if (Auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          alert("חייב להיות רשום לאתר בכדי לקנות")
          return ( <Redirect to={{ pathname: "/Cart", state: { from: props.location } }}/> );
        }

    }else if(Auth.getPath()==="account"){
      if (Auth.isAuthenticated()) {
        return <Component {...props} />;
      } else {
        alert("חייב להיות רשום לאתר ")
        return ( <Redirect to={{ pathname: "/", state: { from: props.location } }}/> );
      }
    }
      


      }} /> );

};
