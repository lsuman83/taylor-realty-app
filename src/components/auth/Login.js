import React from 'react';
import { connect } from "react-redux"
import { loginUser } from '../../actions/auth';




class Login extends React.Component {

    state = {
        email: '',
        username: '',
        password: '',
        error: false 
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    onSubmit = (event) => {
        event.preventDefault();
    
        const {email, password} = this.state
        debugger
        this.props.dispatchLoginUser({email, password})
            .then(() => this.props.history.push('/'))
            .catch(() => this.setState({error: true}))
    }


    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <label>
                        Username
                    </label>
                    <input 
                        type='text'
                        name='email'
                        placeholder='Username'
                        value={this.state.email}
                        onChange={this.onChange}
                        className='p-4'
                        />
                </fieldset>
                <fieldset>
                    <label>
                        Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.onChange}
                        className='p-4'
                        />
                </fieldset>
                <button type='submit'>Login</button>
            </form>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
    }
}

export default connect(null, mapDispatchToProps)(Login)