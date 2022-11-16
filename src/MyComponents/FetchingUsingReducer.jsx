import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
// export default function FetchingUsingReducer() {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('')
//     const [post, setPost] = useState({})

//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/900`)
//             .then(response => {
//                 setLoading(false)
//                 setPost(response.data)
//                 setError('')
//             })
//             .catch(error => {
//                 setLoading(false)
//                 setPost({})
//                 setError(error.message)

//             })

//         return () => {
//             ""
//         }
//     }, [])

//     return (
//         <div>
//             {loading ? "Loading" : post.title}
//             {error ? error : null}

//         </div>
//     )
// }

// using useReducer 

const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: action.error
            }
        default:
            return state;
    }
}

export default function FetchingUsingReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/9`)
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR', error: error.message })
            })
    }, [])

    return (
        <div>
            {state.loading ? "Loading" : state.post.title}
            {state.error ? state.error : null}

        </div>
    )
}
