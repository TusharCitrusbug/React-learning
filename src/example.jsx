const redux = require('redux');
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const initialState = {
    loading: false,
    users: [],
    errors: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILIURE = 'FETCH_USERS_FAILIURE';

const fetchUserRequest = () => {
    requrn({
        type: FETCH_USERS_REQUEST
    })
}


const fetchUserSuccess = users => {
    requrn({
        type: FETCH_USERS_SUCCESS,
        users: users
    })
}

const fetchUserFaliure = error => {
    requrn({
        type: FETCH_USERS_FAILIURE,
        payload: error
    })
}


const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data);
                const users = response.data.map(user => user.id);
                dispatch(fetchUserRequest(users))

            })
            .catch(error => {
                console.log(error);
                dispatch(fetchUserFaliure(error.message))

            })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_USERS_FAILIURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            };
        default:
            break;
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchUsers)