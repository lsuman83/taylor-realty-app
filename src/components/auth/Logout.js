import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../actions/auth";

const Logout = ({ dispatchLogoutUser}) => {

    const history = useHistory();

    const onClick = () => {
        dispatchLogoutUser().then(() => history.push('/'))
    }

    return(
        <button onClick={onClick}>
            Logout
        </button>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        dispatchLogoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Logout)