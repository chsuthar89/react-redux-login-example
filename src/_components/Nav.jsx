import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav({isLogin}) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/users" className="nav-item nav-link">Users</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                { !isLogin ?
                    <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                  : 
                    <NavLink to="/login" className="nav-item nav-link">Logout</NavLink>   
                }                    
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    isLogin : state.UserReducer.isLoggedIn
})

export default connect(mapStateToProps)(Nav);