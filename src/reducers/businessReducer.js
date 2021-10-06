import { ADD_BUSINESS } from "../actions";


const initialState = {
    businesses: []
}

export default function businessReducer(state = initialState, action){
    debugger
    switch(action.type){
        case ADD_BUSINESS:
            return{
                businesses: action.payload
            }
        default:
            return state;
    }
}