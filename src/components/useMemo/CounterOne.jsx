import React, { useState, useMemo } from 'react';
import { Button } from 'react-bootstrap';

export default function CounterOne() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(countOne + 1)
    }
    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])

    return (
        <div>
            <div className="m-2">
                <Button variant="primary" size="sm" onClick={incrementOne}>Counter one - {countOne}</Button>
                <span className="ml-2">{isEven ? 'EVEN' : 'ODD'}</span>
            </div>
            <div className="m-2">
                <Button variant="primary" size="sm" onClick={incrementTwo}>Counter two - {countTwo}</Button>
            </div>
        </div>
    );
}