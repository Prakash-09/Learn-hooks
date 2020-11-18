import React from 'react';
import ComponentC from './ComponentC';

export default function ComponentB() {
    return(
        <div className="text-center">
            Hello Component B
            <ComponentC />
        </div>
    );
}