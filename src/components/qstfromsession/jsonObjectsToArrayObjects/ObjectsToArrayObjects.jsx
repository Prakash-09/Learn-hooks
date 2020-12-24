import React, { useState } from 'react';
import {inputField} from '../../utils/Utils';

export default function ObjectsToArrayObjects() {
    const [objVal, setObjVal] = useState('')
    const [dataObj] = useState({
        "firstName":"Prakash",
        "lastName":"Ketha",
        "town":"BVRM",
    })

    const handleObjVal = (name, val) => {
        setObjVal(val)
    }

    let buildArrayOfObjects = Object.keys(dataObj).map(key => {
        return{
            label: key,
            value: dataObj[key].toUpperCase()
        }
    })

    return(
        <div className="text-center mt-3">
            {/* {console.log(Object.keys(dataObj))}
            {console.log("buildArrayOfObjects", buildArrayOfObjects)} */}
            {inputField('select', 'getObject', '', objVal, handleObjVal, {}, buildArrayOfObjects, 'getObjectId')}
        </div>
    );
}