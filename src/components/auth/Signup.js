import React from 'react';
import { connect } from "react-redux";
import { signupUser } from '../../actions/auth';




class Signup extends React.Component {

    state = {
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        address_1: '',
        address_2: '',
        state: '',
        city: '',
        zip: '',
        phone: '',
        role: 'USER',
        errors: {status: { message: ''}}
    }

    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = (event) => {
        event.preventDefault();
    
        this.props.dispatchUserSignup(this.state)
            .then(() => this.props.history.push('/'))
            .catch(() => this.setState({error: true}))
    }


    render(){
    return(
        <form onSubmit={this.onSubmit}>
            <fieldset>
                <label>
                    First Name
                </label>
                <input
                    type='text'
                    name='first_name'
                    placeholder='John'
                    value={this.state.first_name}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    Last Name
                </label>
                <input
                    type='text'
                    name='last_name'
                    placeholder='Doe'
                    value={this.state.last_name}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    Address 1
                </label>    
                <input
                    type='address'
                    name='address_1'
                    placeholder='1234 Happy St.'
                    value={this.state.address_1}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    Address 2
                </label>
                <input
                    type='address'
                    name='address_2'
                    placeholder='Apt. #5678'
                    value={this.state.address_2}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    City
                </label>
                <input
                    type='text'
                    name='city'
                    placeholder='Orlando'
                    value={this.state.city}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    State
                </label>
                <input
                    type='text'
                    name='state'
                    placeholder='FL'
                    value={this.state.state}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    Zip
                </label>
                <input
                    type='text'
                    name='zip'
                    placeholder='12345'
                    value={this.state.zip}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    Phone
                </label>
                <input
                    type='tel'
                    name='phone'
                    value={this.state.phone}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    Username
                </label>
                <input
                    type='text'
                    name='username'
                    placeholder='happypeople123'
                    value={this.state.username}
                    onChange={this.onChange}
                    className='p-4'
                    />
            </fieldset>
            <fieldset>
                <label>
                    Email
                </label>
                <input
                    type='email'
                    name='email'
                    placeholder='john.smith@email.com'
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
            <button type='submit'>SignUp</button>
        </form>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUserSignup: (credentials) => dispatch(signupUser(credentials))
    }
}

export default connect(null, mapDispatchToProps)(Signup)