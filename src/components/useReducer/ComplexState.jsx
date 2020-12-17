import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState  
        default:
            return state  
    }
}

export default function ComplexState() {
    const [ count, dispatch ] = useReducer(reducer, initialState)
    return(
        <div>
            <div className="text-center">First Count - {count.firstCounter}</div>
            <div className="text-center">Second Count - {count.secondCounter}</div>
            <div className="text-center">
            <Button variant="primary" size="sm" className="m-2" onClick={() => dispatch({type: 'increment', value: 1})}>Increment</Button>
            <Button variant="primary" size="sm" className="m-2" onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</Button>
            <Button variant="primary" size="sm" className="m-2" onClick={() => dispatch({type: 'increment2', value: 1})}>Increment2</Button>
            <Button variant="primary" size="sm" className="m-2" onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement2</Button>
            <Button variant="primary" size="sm" className="m-2" onClick={() => dispatch({type: 'reset'})}>Reset</Button>
            </div>
        </div>
    );
}