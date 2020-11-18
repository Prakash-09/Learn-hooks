import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function HooksCounterTwo() {
    const [ counter, setCounter ] = useState(0)
    // const [ name, setName ] = useState('')
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
        
        document.title = `Clikced ${counter} times`
    }, [counter]) //the [counter] defines here is the useEffect will render depends on when mentioned [counter] state is updated

    const handleCounter = () => {
        setCounter(counter + 1)
        setToggle(!toggle)
    }
    // const handleChange = (e) => {
    //     setName(e.target.value)
    // }
    return(
        <div className="text-center mt-3">
            {/* <div><input type="text" value={name} onChange={handleChange} /></div> */}
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
            {/* {toggle && 
                <div>
                    {name}
                </div>
            } */}
        </div>
    );
}