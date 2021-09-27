import { AUTHENTICATED, NOT_AUTHENTICATED } from './index';


const setToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
    
    if(timeSinceLastLogin < thirtyMinutes) {
        return localStorage.getItem("token");
    }
};

export const checkAuth = () => {
    return (dispatch) => {
        return fetch("http:/localhost:3001/current_user", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getToken() 
            }
        })
        .then((resp) => {
            if(resp.ok) {
                return resp
                .json()
                .then((user) => dispatch({type: AUTHENTICATED, payload: user }));
            }
            else {
                return Promise.reject(dispatch({type: NOT_AUTHENTICATED}));
            }
        })
    }
}

export const signupUser = (credentials) => {
    return (dispatch) => {
        return fetch("http://localhost:3001/signup",{
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: credentials})
        })
        .then((resp) => {
            if(resp.ok) {
                setToken(resp.headers.get("Authorization"));
                return resp
                    .json()
                    .then((userJson) => {
                        dispatch({ type: AUTHENTICATED, payload: userJson.data })
                    })
            }
            else {
                return resp.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                })
            }
        })
    }
}


export const loginUser = (credentials) => {
    return (dispatch) => {
        debugger
        return fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: credentials})
        })
        .then((resp) => {
            if(resp.ok){
                debugger
                setToken(resp.headers.get("Authorization"));
                return resp
                    .json()
                    .then((userJson) => dispatch({ type: AUTHENTICATED, payload: userJson.data })
                    );
            }
            else {
                return resp.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                })
            }
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/logout", {
            method: 'DELETE',
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/json",
                "Authorization": getToken()
            }
        })
        .then((resp) => {
            if(resp.ok){
                return dispatch({ type: NOT_AUTHENTICATED })
            }
            else {
                return resp.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED })
                    return Promise.reject(errors);
                })
            }
        })
    }
}