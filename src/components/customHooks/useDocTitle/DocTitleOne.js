import React, { useState } from 'react'; 
import { Button } from 'react-bootstrap'
import useDocTitle from './UseDocTitle';

export default function DocTitleOne() {
    const [ count, setCount ] = useState(0)

    useDocTitle(count)

    return(
        <div className="text-center">
            <Button variant = "primary" size = "sm" onClick={() => setCount( count + 1 )}> Count {count} </Button>
        </div>
    );
}