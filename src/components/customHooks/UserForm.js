import React from 'react';
import useInput from './UseInput'

export default function UserForm() {
    // const [fName, setFname] = useState('')
    // const [lName, setLname] = useState('')
    const [fName, bindFname, resetFname] = useInput('')
    const [lName, bindLname, resetLname] = useInput('')


    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${fName} ${lName}`)
        resetFname()
        resetLname()
    }
    return (
        <div className="text-center">
            <form onSubmit={submitHandler}>
                <label>First Name: </label>
                <input {...bindFname} type="text" /><br />
                <label>Last Name: </label>
                <input {...bindLname} type="text" /><br />
                <button>Submit</button>
            </form>
        </div>
    );
}