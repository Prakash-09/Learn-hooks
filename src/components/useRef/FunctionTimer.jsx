import React, {useState, useEffect, useRef} from 'react';
import {Button} from 'react-bootstrap';

export default function FunctionTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(timer + 1)
        }, 1000)
        return() => {
            clearInterval(intervalRef.current)
        };
    }, [timer])
    return(
        <div className="text-center m-2">
            {/* {console.log("intervalRef", intervalRef)} */}
            Hooks timer - {timer}
            <Button variant="primary" size="sm" onClick={() => clearInterval(intervalRef.current)} className="ml-3">Clear</Button>
        </div>
    );
}