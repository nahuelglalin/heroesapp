import React from 'react';
import propTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom'


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
   
    localStorage.setItem("lastPath", rest.location.pathname)
   
    return (
        <Route {...rest}
                component={ (props) => (
                    ( isAuthenticated ) ?
                    (<Component {...props} />) :
                    ( <Redirect to="/login" /> )
                )}
        
        />
            
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: propTypes.bool.isRequired,
    component: propTypes.func.isRequired
}