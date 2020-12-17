import React, {useState, useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

export default function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return(
        <div className="text-center">
            <Title />
            <Count text="Age" value={age} />
            <Button handleClick={incrementAge}> Increment age </Button>
            <Count text="Salary" value={salary} />
            <Button handleClick={incrementSalary}> Increment salary </Button>
        </div>
    );
}