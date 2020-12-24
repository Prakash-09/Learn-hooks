import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function HooksCounterTwo() {
    const [ store, setStore ] = useState([])
    const [ toggle, setToggle ] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setStore(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })
        // console.log("useEffect")
    }, [toggle]) //the [counter] defines here is the useEffect will render depends on when mentioned [counter] state is updated

    const handleCounter = () => {
        setToggle(!toggle)
    }
    return(
        <div className="text-center mt-3">
            <Button variant="primary" size="sm" 
                onClick={handleCounter}> 
                Get Data 
            </Button>
            {toggle && 
                <div>
                    {store.map((item, itemidx) => 
                        <p key={itemidx}>{item.name}</p>
                    )}
                </div>
            }
        </div>
    );
}