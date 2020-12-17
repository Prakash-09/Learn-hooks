import React, {useContext} from 'react';
import {CountContext} from './UseRducerWithUseContext';
import { Button } from 'react-bootstrap';

export default function ComponentA() {
    const countContext = useContext(CountContext)
    return(
        <div>Component A
            <Button variant="primary" size="sm" className="m-2" onClick={() => countContext.countDispatch('increment')}>Increment</Button>
            <Button variant="primary" size="sm" className="m-2" onClick={() => countContext.countDispatch('decrement')}>Decrement</Button>
            <Button variant="primary" size="sm" className="m-2" onClick={() => countContext.countDispatch('reset')}>Reset</Button>
        </div>
    );
}