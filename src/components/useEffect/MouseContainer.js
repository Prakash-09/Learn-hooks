import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import ClassMouse from './ClassMouse';
import HooksMouse from './HooksMouse';

export default function MouseContainer() {
    const [toggle, setToggle] = useState(true)
    return (
        <div className="text-center">
            <Button variant="primary" size="sm" onClick={() => setToggle(!toggle)}>Toggle mouse component</Button>
            {toggle &&
                <div>
                    {/* <ClassMouse /> */}
                    <HooksMouse />
                </div>
            }
        </div>
    );
}