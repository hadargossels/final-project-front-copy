import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./auth";


export const Protect = ({ component: Component, ...rest}) => {
 
 

  return (<Route {...rest} render={props => {

        if (Auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          alert("חייב להיות רשום לאתר בכדי לקנות")
          return ( <Redirect to={{ pathname: "/Cart", state: { from: props.location } }}/> );
        }
      }} /> );

};
