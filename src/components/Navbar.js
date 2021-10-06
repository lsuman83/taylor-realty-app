import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { checkAuth } from '../actions/auth';
import Login from './auth/Login';
import Logout from './auth/Logout';
import { Welcome } from './welcome';



class Navbar extends React.Component {
    render(){
    
        const {authChecked, loggedIn, currentUser} = this.props

    
        return loggedIn ? (
            <nav>
                {currentUser.email}
                <NavLink 
                    exact
                    to={`/${currentUser.username}`}
                >
                    Home
                </NavLink>
                <NavLink
                    exact
                    to='/business/search'
                >
                    Search Businesses
                </NavLink>
                <NavLink 
                    exact
                    to={`/${currentUser.username}/profile`}
                >
                    Profile
                </NavLink>
                <Logout />
            </nav>
                ) : (
                <Welcome simple={true} />
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