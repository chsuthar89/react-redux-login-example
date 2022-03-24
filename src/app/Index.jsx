import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Alert } from '../_components/Alert';
import Nav from '../_components/Nav';
import Home from '@/home';
import Users from '@/users';
import About from '@/about';
import Login from '@/auth/Login';

function App() {
    const { pathname } = useLocation(); 
    
    const [tital, setTitle] = React.useState('Login App');

    return (
        <div className="app-container bg-light">
            <Nav />
            <Alert />
            <div className="container pt-4 pb-4">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/" component={Home} />
                    <Route path='/users' render={props => (
                        <Users {...props} tital={tital} />
                    )} />
                    <Route path="/login" component={Login} />
                    <Route path='/about' render={props => (
                        <About {...props} tital={tital} />
                    )} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}

export { App }; 