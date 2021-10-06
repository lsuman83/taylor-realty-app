import Navbar from "../components/Navbar"
import {connect} from 'react-redux'
import { useState } from "react"
import { searchBusiness } from "../actions/businesses"
import BusinessList from "../components/BusinessList"


const BusinessSearch = ({dispatchSearchBusiness, businesses}) => {

    const[businessType, setBusType] = useState('');
    const[businessName, setBusName] = useState('');
    const[businessLocation, setBusLoc] = useState('');
    const[error, setErr] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatchSearchBusiness({businessType, businessName, businessLocation})
            .catch(() => setErr(true) )
    }

    return (
        <div>
            <Navbar/>
            Business Search
            <form onSubmit={onSubmit}>
                <label
                    htmlFor="business_type"
                >
                    Type: 
                </label>
                <input 
                    type="text"
                    name="business_type"
                    id="business_type"
                    value={businessType}
                    onChange={(e) => setBusType(e.target.value)}
                />
                 <label
                    htmlFor="business_name"
                >
                    Name: 
                </label>
                <input 
                    type="text"
                    name="business_name"
                    id="business_name"
                    value={businessName}
                    onChange={(e) => setBusName(e.target.value)}
                />
                 <label
                    htmlFor="business_location"
                >
                    Location: 
                </label>
                <input 
                    type="text"
                    name="business_location"
                    id="business_location"
                    value={businessLocation}
                    onChange={(e) => setBusLoc(e.target.value)}
                />
                <button type="submit">
                    Search
                </button>
            </form>
            <br/>
            <BusinessList businessList={businesses} />
        </div>
    )
}

const mapStateToProps = ({results: {businesses}}) => {
    return {
        businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSearchBusiness: (info) => dispatch(searchBusiness(info))
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(BusinessSearch)