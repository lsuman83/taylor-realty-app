import { NavLink } from 'react-router-dom'


export default function Navbar(){
    return(
        <nav>
            <NavLink 
                exact
                to='/'
            >
                Home
            </NavLink>
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
    );
}