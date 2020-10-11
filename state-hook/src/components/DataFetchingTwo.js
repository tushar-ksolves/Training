import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

const initialState = {
    loading: true,
    error: '',
    post: {}
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
                error: 'Something Went Wrong'
            }
        default: return state
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR', error: 'Something WEnt Wrong' })
            })
    }, [])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo
