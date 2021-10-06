import { business } from './BusinessList'


export const Business = ({business}) => {
    const distance = Math.round((business.distance / 1609.344) * 100) / 100
    const location = business.location.display_address.join(', ')
    debugger
    return (
        <div>
            <h1>{business.name}</h1>       
            <p>Rating: {business.rating} </p>
            <p>{location}</p>
            <p>{business.display_phone}</p>
            <p>Distance from Search Location: {distance} miles</p>
            <br/>
        </div>
    )
}