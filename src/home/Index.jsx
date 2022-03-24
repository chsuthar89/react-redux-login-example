import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './../redux/store';

function Home({app_message}) {
    console.log(app_message);
    const updateMessage = () => {
        store.dispatch({
            type: 'change_message',
            message: 'Updated message from home page!',
        })
    };
    
    return (
        <div>
            <h1>React - Sample Code</h1>
            <p>An example app showing how to list, add, edit and delete user records with React and the React Hook Form library.</p>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
            <button onClick={updateMessage}>Change Button</button>  
            <p>{app_message}</p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    app_message : state.UserReducer.message
})

export default connect(mapStateToProps)(Home);