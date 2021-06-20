import { Component } from "react";
import { Redirect,Route } from "react-router-dom";

export const PrivateRoute = ({component: Component, ...otherProps}) => {
    return (
      <Route 
          {...otherProps}
          render = {props => 
          localStorage.getItem('authToken') ? 
          (<Component {...props} />) : 
          (<Redirect to = "/login"/>)
        }
      />
    )
} 