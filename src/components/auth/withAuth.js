import React from "react";
import { connect } from "react-redux";
import { checkAuth } from "../../actions/auth";
import { Welcome } from "../welcome";


function withAuth(WrappedComponent) {
    debugger
    class Wrapper extends React.Component{
        componentDidMount(){
            this.props.dispatchCheckAuth()
        }

        render(){
            if(!this.props.authChecked){
                return null
            }else if(!this.props.loggedIn){
                return(
                    <>
                        <p className='bg-gray-400 text-red-600'>You must be logged in to view this page.</p>
                        <Welcome simple={true} />
                    </>
                )
            }else{
                return <WrappedComponent {...this.props} />
            }
        }
    }


    const mapStateToProps = ({auth: authChecked, loggedIn, currentUser}) => {
        return{
            authChecked,
            loggedIn,
            currentUser
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return{
            dispatchCheckAuth: () =>  dispatch(checkAuth())
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper)
}

export default withAuth