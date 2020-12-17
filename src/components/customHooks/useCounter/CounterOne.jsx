import React from 'react';
import { Button } from 'react-bootstrap';
import useCounter from './UseCounter';

export default function CounterOne() {
    const [count, increment, decrement, reset] = useCounter()

    return(
        <div className="text-center">
            <h5> Count- {count}</h5>
            <Button variant = "primary" className="m-1" size = "sm" onClick={increment}>Increment</Button>
            <Button variant = "primary" className="m-1" size = "sm" onClick={decrement}>Decrement</Button>
            <Button variant = "primary" className="m-1" size = "sm" onClick={reset}>Reset</Button>
        </div>
    );
}