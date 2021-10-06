import { Business } from "./Business"

const BusinessList = (props) => {
    debugger
    return(
        <div>
            {props.businessList.map((business) => 
                <ul>
                    <li><Business business={business} /></li>
                </ul>
            )}
        </div>
    )
}

export default BusinessList