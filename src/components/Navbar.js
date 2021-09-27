import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { checkAuth } from '../actions/auth';
import Logout from './auth/Logout';



class Navbar extends React.Component {
    render(){
    
        const {authChecked, loggedIn, currentUser} = this.props


        return loggedIn ? (
            <nav>
                {currentUser.email}
                <NavLink 
                    exact
                    to='/'
                >
                    Home
                </NavLink>
                <Logout />
            </nav>
                ) : (
            <nav>
                <NavLink 
                    exact
                    to='/login'
                >
                    Login
                </NavLink>
                <NavLink 
                    exact
                    to='/signup'
                >
                    SignUp
                </NavLink>
            </nav>
        )
    }
}


const mapStateToProps = ({auth: {authChecked, loggedIn, currentUser}}) => {
    
    return{
        authChecked,
        loggedIn,
        currentUser
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        dispatchCheckAuth: () => dispatch(checkAuth())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)