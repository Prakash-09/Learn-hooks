import {useState} from 'react';

export default function UseCounter(intialValue = 0) {
    const [count, setCount] = useState(intialValue);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(intialValue)
    }
    
    return [count, increment, decrement, reset]
}