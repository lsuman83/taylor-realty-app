import { ADD_BUSINESS } from "./index";

export const searchBusiness = (info) => {    
    return (dispatch) => {
        return fetch(`http://localhost:3001/business/search?term=${info.businessType}&location=${info.businessLocation}`,{
                    method: 'GET',
                    headers: {
                        "Accept":'application/json',
                        "Content-Type": 'application/json',
                    }
                    })
                    .then(resp => {
                        if(resp.ok){
                            return resp
                                    .json()
                                    .then((businessJson) => {
                                        debugger
                                        dispatch({type: ADD_BUSINESS, payload: businessJson.businesses})
                                    })
                        } else {
                            return resp
                                    .json()
                                    .then((errors) => {
                                        return Promise.reject(errors);
                                    })
                        }
                    })
                }
}