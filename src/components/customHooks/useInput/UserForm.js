import React from 'react';
import useInput from './UseInput';
import './UserFormStyles.css';
import { Button } from 'react-bootstrap';

export default function UserForm() {
    // const [fName, setFname] = useState('')
    // const [lName, setLname] = useState('')
    const [fName, bindFname, resetFname] = useInput('')
    const [lName, bindLname, resetLname] = useInput('')
    const [age, bindAge, resetAge] = useInput('')


    const submitHandler = (e) => {
        e.preventDefault()
        if(age !== '' && lName !== '' && fName !== '' ){
            alert(`Entered details ${fName} ${lName} ${age}`)
            resetFname()
            resetLname()
            resetAge()
        }else{
            alert("Please enter all the fields")
        }
    }
    return (
        <div className="text-center">
            <form className="user-form-container p-2">
                <label>First Name: </label>
                <input {...bindFname} type="text" className="m-3" /><br />
                <label>Last Name: </label>
                <input {...bindLname} type="text" className="m-3" /><br />
                <label className="mr-5">Age: </label>
                <input {...bindAge} type="number" className="m-3" /><br />
                <Button variant="primary" size="sm" onClick={submitHandler}>Submit</Button>
            </form>
        </div>
    );
}