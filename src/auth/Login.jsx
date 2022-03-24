import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import store from './../redux/store';
import { alertService } from '@/_services';

function Login({isLogin}) {

    const [inputField, setInputField] = useState({
        username : '',
        password : ''
    });
    
    function doLogin() {
        if(inputField.username == 'admin' && inputField.password == 'admin123'){
            store.dispatch({
                type: 'do_login',
                val: true,
            });

            localStorage.setItem("isAuth", true);

            alertService.success('Login successfully!', { keepAfterRouteChange: true });
        } else {
            alertService.error('Invalid Credential!', { keepAfterRouteChange: true });
        }
    }

    const doLogout = () => {
        store.dispatch({
            type: 'do_logout',
            val: false
        });

        localStorage.removeItem("isAuth");

        alertService.success('Logout successfully!', { keepAfterRouteChange: true });
    }

    const inputsHandler = (e) =>{
        setInputField( {...inputField, [e.target.name]: e.target.value} )
    }

    // useEffect(() => {
    //     console.log(inputField);
    // }, []);

    return (
        <div className="col-md-6 col-md-offset-3">
            { 
            !isLogin ? <><h3>Login</h3>
                <div className='form-group'>
                    <label htmlFor="username">Username (admin)</label>
                    <input type="text" name='username' onChange={ inputsHandler } className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor="username">Password (admin123)</label>
                    <input type="password" name='password' onChange={ inputsHandler } className='form-control' />
                </div>
                <div className='form-group'>
                    <button className="btn btn-primary" onClick={ doLogin }>Login</button>
                </div> 
            </> : 
                <>
                    <div className='form-group'>
                        <button className="btn btn-primary" onClick={ doLogout }>Logout</button>
                    </div>
                </> 
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin : state.UserReducer.isLoggedIn
})

export default connect(mapStateToProps)(Login);
