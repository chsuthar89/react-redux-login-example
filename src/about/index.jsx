import React from 'react'
import { connect } from 'react-redux';

function About({isLogin}) {
    if (isLogin) {
        return (
            <div>
                <h3>About US</h3>
                <p>Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulmLorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulmLorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulmLorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulmLorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulmLorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulmLorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm Lorem ipsulm</p>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Unauthorize!</h3>
                <p>Please Login to access this page</p>
            </div>
        )
    }    
}

const mapStateToProps = (state) => ({
    isLogin : state.UserReducer.isLoggedIn
})

export default connect(mapStateToProps)(About)