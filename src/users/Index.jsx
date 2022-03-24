import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { List } from './List';
import { AddEdit } from './AddEdit';

function Users({ match, isLogin }) {
    const { path } = match;
    console.log(isLogin);

    if (isLogin) {
        return (
            <Switch>
                <Route exact path={path} component={List} />
                <Route path={`${path}/add`} component={AddEdit} />
                <Route path={`${path}/edit/:id`} component={AddEdit} />
            </Switch>
        );
    } else {
        return (
            <div>
                <h3>Unauthorize!</h3>
                <p>Please Login to access this page</p>
            </div>
        );
    }     
}

const mapStateToProps = (state) => ({
    isLogin : state.UserReducer.isLoggedIn
})

export default connect(mapStateToProps)(Users);
