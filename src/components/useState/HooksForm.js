import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function HooksForm() {
    const [properties, setProperties] = useState({ name: '', age: '' })
    const [toggle, setToggle] = useState(false)

    // const handleSubmit = React.useCallback(
    //     () => setToggle(!toggle),
    //     [toggle, setToggle],
    // );

    const handleSubmit = () => {
        setToggle(true)
    }
    return (
        <div className="text-center">
            <form>
                <input type="text" value={properties.name} onChange={e => setProperties({ ...properties, name: e.target.value })} className="m-2" /><br />
                <input type="text" value={properties.age} onChange={e => setProperties({ ...properties, age: e.target.value })} className="m-2" /><br />
                <Button variant="primary" size="sm" onClick={handleSubmit}>Submit</Button>
            </form>
            {toggle &&
                <div>
                    <span>Name: {properties.name}</span><br />
                    <span>Age: {properties.age}</span>
                </div>
            }
        </div>
    );
}