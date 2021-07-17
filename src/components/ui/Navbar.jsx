import React, {useContext} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import {AuthContext} from '../../auth/AuthContext';
import { types } from '../../types/types';

import "../../index.css"

export const Navbar = () => {

    const { user, dispatch } = useContext( AuthContext );

    const history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: types.logout,
            payload: {}
        })

        history.replace("/login");

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 text-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-link nav-item text-info">
                        { user.name }
                    </span>

                    <button
                        className="btn nav-item nav-link" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}