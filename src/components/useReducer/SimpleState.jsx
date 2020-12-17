import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState  
        default:
            return state  
    }
}

export default function SimpleState() {
    const [ count, dispatch ] = useReducer(reducer, initialState)
    return(
        <div>
            <div className="text-center">Count - {count}</div>
            <div className="text-center">
            <Button variant="primary" size="sm" className="m-2" onClick={() => dispatch('increment')}>Increment</Button>
            <Button variant="primary" size="sm" className="m-2" onClick={() => dispatch('decrement')}>Decrement</Button>
            <Button variant="primary" size="sm" className="m-2" onClick={() => dispatch('reset')}>Reset</Button>
            </div>
        </div>
    );
}