import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

export default function HooksCounter() {
    const [ counter, setCounter ] = useState(0)

    const handleCounter = () => {
        setCounter(counter + 1)
    }
    return(
        <div className="text-center mt-3">
            <Button variant="primary" size="sm" onClick={handleCounter}> Count {counter} </Button>
        </div>
    );
}