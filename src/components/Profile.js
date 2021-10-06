import Navbar from './Navbar'
import {connect} from 'react-redux'

const Profile = (props) => {
    debugger
    return(
        <div>
            <Navbar />
            <ul>
                <li>Email : {props.currentUser.email}</li>
                <li>Username : {props.currentUser.username}</li>
                <li>First Name: {props.currentUser.first_name}</li>
                <li>Last Name: {props.currentUser.last_name}</li>
                <li>Address: {props.currentUser.address}</li>
                <li>City: {props.currentUser.city}</li>
                <li>State: {props.currentUser.state}</li>
                <li>Zip Code: {props.currentUser.zip}</li>
                <li>Telephone: {props.currentUser.phone}</li>
                <li>Role: {props.currentUser.role}</li>
            </ul>
        </div>
    )
}


export default Profile