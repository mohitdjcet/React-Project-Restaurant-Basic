import React from 'react';
import { Redirect,Route } from 'react-router-dom';

const Protect = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={
        props =>
        localStorage.getItem("login") ?(
            <Component {...rest} {...props} />
        ):
        <Redirect to="/Login" />
      } />
  )
}

export default Protect;