import React, {useReducer, useEffect} from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

const initialState = {
    isLoading: true,
    post: [],
    error: '',
}
const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCESS':
            return{
                isLoading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return{
                isLoading: false,
                post: [],
                error: 'Something went wrong'
            }
        default :
            return state
    }
}

export default function GetApiTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(rsp => {
            dispatch({type: 'FETCH_SUCESS', payload: rsp.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])

    return(
        <div className="text-center">
            {state.isLoading ? "Loading.." 
            : 
                <Row md="2" className="text-left p-3">
                {state.post.map((item, itemIdx) => 
                    <Col key={itemIdx}> - {item.title}</Col>
                )}
                </Row>}
            {state.error ? state.error : null }
        </div>
    );
}